"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "./ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    window.location.href = "https://app.loch.one/welcome";
  };

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const isValid = /^\S+@\S+\.\S+$/.test(inputValue);
    setIsValidEmail(isValid);
  };
  return (
    <>
      <div className="w-[640px] z-999 bg-white min-h-screen h-full flex-col md:flex items-center justify-center shadow-md hidden ">
        <div className="flex flex-col m-auto items-center justify-center my-auto h-full mb-40">
          <form onSubmit={handleSubmit}>
            <div className="w-[365px] justify-center">
              <h2 className="text-[39px] text-[#B0B1B3] leading-[48px] font-medium pb-6">
                Sign up for exclusive access.
              </h2>
              <Input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="w-[340px] h-[60px] placeholder:text-gray-300 mb-2"
              />
              <Button
                type="submit"
                className="w-[340px] h-[60px] bg-[#19191A] mt-2"
              >
                Get Started
              </Button>
              <p className="text-[16px] font-semibold text-left pt-8 -ml-2">
                You&apos;ll receive an email with an invite link to join.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
