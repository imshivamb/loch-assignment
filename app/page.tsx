import Image from "next/image";
import SignUp from "../components/SignUp";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex flex-row justify-between mx-auto w-full bg-gradient-to-bl from-black from-20% via-[#2F15D0] via-50% to-[#1FA911]/80 to-80%">
      <div className="max-w-full">
        <Main />
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
}
