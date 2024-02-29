import { connect } from "@/app/dbConfig//dbConfig";
import User from "@/app/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    //check if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          message: "user already exist",
          success: false,
        },
        { status: 400 }
      );
    } else {
      //hashing password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      return NextResponse.json(
        {
          message: "Account created successfully",
          success: true,
          payload: savedUser,
        },
        { status: 200 }
      );
    }
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
