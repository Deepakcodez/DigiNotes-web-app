import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getUserFromToken = (request : NextRequest)=>{
     
    try {

        const token = request.cookies.get('token')?.name || '' ;
        const decodedTOken:any = jwt.verify(token,  process.env.TOKEN_SECRET!);
        return decodedTOken.id

        
    } catch (error:any) {
        throw new Error(error.message)
    }
}