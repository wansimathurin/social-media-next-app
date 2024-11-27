'use client'
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";

export default function Page() {
  // State to store the image preview
  const [imagePreview, setImagePreview] = useState(null);

  // Handle the image upload and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center flex-col">
      <Card className={`w-[350px] ${imagePreview?'h-[100%]':'h-[80%]'}`}>
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription className="text-center ">
            Welcome to weShare, register and start sharing your moments today!.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input placeholder="Enter your username" name="name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input placeholder="Enter your email" name="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input placeholder="Enter your password" type="password" name="password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Profile Image</Label>
                <Input
                  placeholder="Select your image"
                  name="profile"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {/* Display the image preview */}
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="w-full h-[150px] rounded object-cover object-top"
                  />
                </div>
              )}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Bio</Label>
                <Input placeholder="Enter a bio" name="bio" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between flex-col gap-5">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button className="w-[100%]">Register</Button>
          <p>
            Already member?{" "}
            <Link href="/" className="text-primary">
              SignIn
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
