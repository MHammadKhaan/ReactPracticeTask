import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email,setEmail]=useState<string>("")
  return (
    <div className="flex  items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-3 md:border md:p-8 w-full max-w-md rounded-lg mx-4 ">
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-2 ">Forgot Password</h1>
          <p className="text-sm text-gray-600" >Enter your email address to reset your password </p>
        </div>
        <div className="relative" >
            <Input
            type="text"
            placeholder="Enter your email"
            value={email}
            name="email"
            className=" focus-visible:ring-1 pl-10 "
            onChange={(e)=>setEmail(e.target.value)}
            />
            <Mail className=" absolute inset-y-2 left-3 text-gray-600 pointer-events-none " />
        </div>
        <Button className="hover:bg-yellow-700 " >Send Reset Link</Button>
        <span className="text-center" >Back to {" "} <Link className="text-blue-500 hover:underline hover:text-yellow-700" to={"/"} > Login</Link></span>
      </form>
    </div>
  );
};

export default ForgotPassword;
