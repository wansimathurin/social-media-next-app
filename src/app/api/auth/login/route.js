import User from "@/models/User"
import connectDB from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";

export const POST = async (req, res) => { 
    const { email, password } = await req.json()
    //connecting to db
    await connectDB()
    //check if user exists
    try {
        const isUser = await User.findOne({ email: email });
        //if user's password is same
        if (isUser) {
            const userPassword = isUser.password;
            // password comparison 
            const isPasswordMatching = bcrypt.compareSync(password, userPassword)
            if (isPasswordMatching) {
                   return new NextResponse(JSON.stringify({message:'Successfully logged in',userData:isUser}),{status:200})
            } else {
                 return new NextResponse(
                   JSON.stringify({ message: "Invalid Credentials" }),
                   { status: 400 }
                 );
               }
        } else {
            return new NextResponse(
              JSON.stringify({ message: "User does not exist" }),
              { status: 400 }
            );
        }
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message: error}), { status: 500 })
    }
}