import { connect } from "@/app/dbConfig/dbConfig"; 
import { getUserFromToken } from "@/app/helpers/getUser";
import Document from "@/app/models/document.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {  
    // getting userId
    const token = request.cookies.get('token')?.value || '';
    console.log('>>>>>>>>>>>token is : ', token)
    const userId = await getUserFromToken(token);
    console.log('>>>>>>>>>>> userId', userId)

    
    // Check if document already exists
    const docs = await Document.find({createdBy : userId});
    
    if (docs.length === 0) {
        return NextResponse.json(
          {
            message: "No documents found for the user",
            success: false,
          },
          { status: 404 } // Not Found status code
        );
      }
    if (!docs) {
      return NextResponse.json(
        {
          message: "Document doesn't exists",
          success: false,
        },
        { status: 400 }
      );
    }

   
    return NextResponse.json(
      {
        message: "All Documents",
        success: true,
        payload: docs,
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
