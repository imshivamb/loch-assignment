"use client";

import { useState, useEffect } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const MobileSignup = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    window.location.href = "https://app.loch.one/welcome";
  };

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const isValid = /^\S+@\S+\.\S+$/.test(inputValue);
    setIsValidEmail(isValid);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-between mx-auto w-full px-5 py-4">
      <div>
        <Image
          src="/Vector.png"
          alt="Loch logo"
          width={60}
          height={60}
          className="block md:hidden"
        />
      </div>
      <div>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-white md:hidden block text-black rounded-xl hover:bg-white/70">
              Sign up
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-[430px] rounded-xl">
            <div className="flex flex-col m-auto items-center justify-center my-auto h-full mb-20">
              <form onSubmit={handleSubmit}>
                <div className="w-[365px] flex-col items-center justify-center">
                  <Image
                    src="/Vector-black.png"
                    alt="Loch logo"
                    width={60}
                    height={60}
                    className="pb-4 mx-auto"
                  />
                  <h2 className="text-[39px] text-center text-[#B0B1B3] leading-[48px] font-medium pb-6">
                    Sign up for exclusive access.
                  </h2>
                  <Input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="w-[300px] h-[50px] ml-8 placeholder:text-gray-300 mb-2"
                  />
                  <Button
                    type="submit"
                    className="w-[300px] h-[50px] ml-8 bg-[#19191A] mt-2"
                  >
                    Get Started
                  </Button>
                  <p className="text-[16px] font-semibold text-left pt-8 -ml-1">
                    You&apos;ll receive an email with an invite link to join.
                  </p>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default MobileSignup;
