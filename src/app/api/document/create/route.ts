import { connect } from "@/app/dbConfig/dbConfig"; // Adjust path as needed
import Document from "@/app/models/document.model"; // Assuming you have a Document model
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { subject } = reqBody;

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
      subject
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
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
