import { User } from '@/app/models/userModel';
import { connect } from "@/app/dbConfig/dbConfig"; // Adjust path as needed
import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from '@/app/helpers/getUser'; 
connect();

export async function  GET(request:NextRequest) {
    try {
       
        const userId =  await getUserFromToken(request);
        const user = await User.findOne({_id : userId}).select( "-password")
        return NextResponse.json({
                      message : "User found",
                      data : user
        },{status : 200})
    } catch (error:any) {
        return NextResponse.json(
            {
                error : error.message,
                success : false,
        },{status:500})
    }
    
}