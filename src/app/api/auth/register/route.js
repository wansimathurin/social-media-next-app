import User from "@/models/User";
import connectDB from "@/utils/db"
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST = async (req, res) => {
    const { username, email, password, bio, profile_picture } = await req.json();
    // connect to database
    await connectDB();
    // verify if user exist already
    try {
     
        const isUser = await User.findOne({ email: email })
        if (isUser) {
            return new NextResponse(JSON.stringify({ message: "User already exists" }), {
                status:400
            })
        }
    } catch (error) {
        console.log(error);
       return new NextResponse(
         JSON.stringify(error),
         {
           status: 500,
         }
       );
    }
    // create a new user
    try{
        console.log("Received Data", { username, email, password, bio, profile_picture });
        //hash user password
      const hashedPassword = bcrypt.hashSync(password, 8);
      //we validate the user data with the model we built
      const newUser = new User({ username, email, password:hashedPassword, bio, profile_picture });
      // save the validated user data in the database
      await newUser.save();
      // return a response to the request 
         return new NextResponse(
           JSON.stringify({ message: "User created" }),
           {
             status: 201,
           }
         );
    }catch(error){
        console.log(error);
        return new NextResponse(JSON.stringify(error), {
          status: 500,
        });
    }
}