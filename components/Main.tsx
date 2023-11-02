import Image from "next/image";
import Card from "./Cards";
import { Eye, Bell } from "lucide-react";
import { Separator } from "./ui/separator";
import Testimonials from "./Testimonials";
import MobileSignup from "./MobileSignup";

const Main = () => {
  return (
    <div className="bg-gradient-to-bl from-black from-20% via-[#2F15D0] via-50% to-[#1FA911]/80 to-80% min-h-screen w-full pb-16">
      <MobileSignup />
      <div className="flex flex-col justify-center items-center pt-8 mx-auto w-full ">
        <div className="flex md:flex-row flex-col items-center ml-8 justify-between gap-8">
          <div className="mb-10 md:mb-0 mx-2 md:ml-6 w-[340px] flex flex-col ">
            <Bell
              className=" ml-2 mb-2 mr-6"
              width={32}
              height={32}
              color="white"
            />

            <h3 className="text-[#F2F2F2] text-[28px] md:text-[31px] leading-10 pb-2">
              Get notified when a highly correlated whale makes a move
            </h3>
            <p className="text-gray-300">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>

          <Card />
        </div>
        <div className="flex items-center justify-center flex-col-reverse md:flex-row md:justify-between gap-10 mr-4 md:mr-10 pr-4 md:pr-6">
          <Image
            src="/Cohorts 1.png"
            alt="cohorts image"
            width={450}
            height={400}
            className="ml-6 p-2 md:p-0 md:ml-0"
          />
          <div className="flex flex-col mt-10 md:mt-0  md:justify-end md:items-end justify-center items-center">
            <Eye width={32} height={32} className="text-white md:float-right" />
            <div className="md:text-right text-center w-[325px] md:ml-0 ml-4">
              <h3 className="text-[#F2F2F2] text-[28px] md:text-[31px] leading-10 pb-2">
                Watch what the whales are doing
              </h3>
              <p className="text-gray-300">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end ">
          <div className="md:mr-20 mr-6">
            <h4 className="text-[25px] font-medium text-[#F2F2F2] md:text-right text-center">
              Testimonials
            </h4>
            <Separator className="my-3 w-auto md:w-[750px]" />
          </div>

          <div className="flex items-center">
            <Image
              src="/Vector.png"
              alt="Loch logo"
              width={60}
              height={60}
              className="mt-20 mx-16 hidden md:block"
            />
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
