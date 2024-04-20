import React from "react";
import pic from "../../public/doctor.png";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Doctor = () => {
  return (
    <div className="h-[300px] px-[7%] bg-[#171848]  overflow-hidden flex items-center justify-between">
      <h1 className="text-[52px] leading-[62px] w-[100%] font-semibold text-white">
        Want to hire the right person for the job?
      </h1>
      <div className="grid grid-cols-2 justify-between items-center">
        <Image src={pic} className="h-[500px] w-full   " />
        <Button className="bg-[#018870] text-white" size="md">
          Register to post a job <MdArrowOutward />
        </Button>
      </div>
    </div>
  );
};

export default Doctor;
