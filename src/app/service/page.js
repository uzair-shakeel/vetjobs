"use client";
import React from "react";
import Layout from "../../components/Layout";
import illustration from "../../../public/Illustration.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Layout>
        <section className="bg-[#E6F3F1] min-h-[300px] relative  mx-[2%]">
          <div className="relative">
            <Image
              src={illustration}
              className="absolute right-[260px] top-[-60px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-[52px] leading-[62px] font-bold">About Us</h1>
              <p className="text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default page;
