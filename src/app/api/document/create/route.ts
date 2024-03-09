import { connect } from "@/app/dbConfig/dbConfig"; 
import { getUserFromToken } from "@/app/helpers/getUser";
import Document from "@/app/models/document.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { subject  } = reqBody;
    // getting userId
    const token = request.cookies.get('token')?.value || '';
    console.log('>>>>>>>>>>>token is : ', token)
    const userId = await getUserFromToken(token);
    console.log('>>>>>>>>>>> userId', userId)

    if(!subject){
        return NextResponse.json(
            {
              message: "subject not provided",
              success: false,
            },
            { status: 400 }
          );
    }

    // Check if document already exists
    const doc = await Document.findOne({ subject });

    if (doc) {
      return NextResponse.json(
        {
          message: "Document already exists",
          success: false,
        },
        { status: 400 }
      );
    }

    // Create a new document
    const newDoc = new Document({ 
      subject : subject ,
      createdBy : userId
    });

    // Save the new document
    const savedDoc = await newDoc.save();

    return NextResponse.json(
      {
        message: "Document created successfully",
        success: true,
        payload: savedDoc,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log('>>>>>>>>>>>error :', error.message)
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
