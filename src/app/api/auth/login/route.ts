import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        success: false,
      }, { status: 400 });
    }

    // Check password
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return  NextResponse.json({
        message: "Incorrect password",
        success: false,
      }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
      name: user.name,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response =  NextResponse.json({
      message: "Login successful",
      success: true,
    }, { status: 200 });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    
    return response;
  } catch (error: any) {
    return  NextResponse.json({
      error: error.message,
      success: false,
    }, { status: 500 });
  }
}
