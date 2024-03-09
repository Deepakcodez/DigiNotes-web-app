import jwt from 'jsonwebtoken'
export const getUserFromToken =  (token: string): string =>{
     
    try {

        const decodedTOken:any = jwt.verify(token,  process.env.TOKEN_SECRET!);
        return decodedTOken.id

        
    } catch (error:any) {
        throw new Error(error.message)
    }
}