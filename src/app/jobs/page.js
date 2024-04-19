"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import illustration from "../../../public/Illustration.png";
import Image from "next/image";
import { Button, Input, Select } from "@nextui-org/react";
import { SearchNormal1 } from "iconsax-react";
const jobs = () => {
  return (
    <div>
      <Header />
      <section className="bg-[#E6F3F1] min-h-[300px] relative  mx-[2%]">
        <div className="relative  translate-y-[50%]">
          <Image
            src={illustration}
            className="absolute right-[260px] top-[-60px]"
          />
          <h1 className="text-[52px] text-center leading-[62px] font-bold">
            Find the perfect Job <br /> Only for you
          </h1>
        </div>
        <div className="bg-white rounded-md py-3 px-4 absolute bottom-[-10px] right-0 left-0 ">
          <div className="flex gap-5">
            <Input placeholder="Vet Assistant" />
            <Input placeholder="Sanderson 812 NT" />
            <Button className="bg-[#171848] text-white" size="lg">
              <SearchNormal1 size="32" color="white" className="text-white" />
              Search
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default jobs;
