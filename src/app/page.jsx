import * as React from "react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ModeToggle } from "../components/ui/toggleButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center flex-col">
      <Card className="w-[350px] h-[450px]">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle className="text-2xl">SignIn</CardTitle>
          <CardDescription className="text-center text-primary-foreground">
            Welcome to weShare, connect with friends and start sharing your
            moments today!.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input placeholder="Enter your email" name="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input placeholder="Enter your password" name="password" />
              </div>
           
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between flex-col gap-5">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button className="w-[100%]">SignIn</Button>
          <p>
            Not member yet?{" "}
            <Link href="/register" className="text-primary">Register</Link>{" "}
          </p>
        </CardFooter>
      </Card>

    </div>
  );
}
