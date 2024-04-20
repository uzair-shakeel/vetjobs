"use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import avatar from "../../../public/Avatar.png";
import Image from "next/image";
import { Call, Car, Clock } from "iconsax-react";
import { Button } from "@nextui-org/react";
import Ghost from "../../../public/icons/ghost.png";
import Layout from "../../components/Layout";
import { FaFlag } from "react-icons/fa6";
import Doctor from "../../components/doctor";

const page = () => {
  return (
    <>
      <Layout>
        <section className="flex px-[10%] gap-[10%] py-[20px]">
          <div className="px-4 py-7 w-[75%]">
            <div className="space-y-2 py-3">
              <h1 className="text-[32px] leading=[54px] font-bold">
                Graphic Design
              </h1>
              <p className="text-[14px] text-black/60">
                Sanderson 812 NT * 03-24-2023
              </p>
            </div>

            <div className="py-3">
              <h4 className="font-semibold text-[20px] py-3">Job details</h4>
              <div className="flex justify-between w-full text-[14px] text-black/60">
                <div className="flex items-center gap-4">
                  Job Type
                  <div className="bg-[#F9F7FD] rounded-full flex gap-2 text-black font-semibold items-center justify-center py-1 px-2">
                    <Clock size="15" color="#915BCF" /> Full time
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  Hourly Rate
                  <div className="bg-[#F9F7FD] rounded-full flex gap-2 text-black font-semibold items-center justify-center py-1 px-2">
                    <Clock size="22" color="#915BCF" /> 10 - 20
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  Distance
                  <div className="bg-[#F9F7FD] rounded-full flex gap-2 text-black font-semibold items-center justify-center py-1 px-2">
                    <Car size="22" color="#EB9D55" /> 5km
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3 ">
              <h4 className="font-semibold text-[20px] py-3">About the Job</h4>
              <div className="space-y-[30px]">
                <div>
                  <h4 className="font-semibold text-[16px] py-3">
                    Shift Details
                  </h4>
                  <table className="w-full">
                    <tbody>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[16px] text-black/80">
                            <Clock size="22" color="#915BCF" /> Monday
                          </p>
                        </td>
                        <td className="  text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[16px] text-black/80">
                            <Clock size="22" color="#915BCF" /> Tuesday
                          </p>
                        </td>
                        <td className="  text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[16px] text-black/80">
                            <Clock size="22" color="#915BCF" /> Wednesday
                          </p>
                        </td>
                        <td className="  text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[16px] text-black/80">
                            <Clock size="22" color="#915BCF" /> Thursday
                          </p>
                        </td>
                        <td className="  text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[16px] text-black/80">
                            <Clock size="22" color="#915BCF" /> Friday
                          </p>
                        </td>
                        <td className="  text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[16px] text-black/80">
                            <Clock size="22" color="#915BCF" /> Saturday
                          </p>
                        </td>
                        <td className="  text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[16px] text-black/80">
                            <Clock size="22" color="#915BCF" /> Sunday
                          </p>
                        </td>
                        <td className="  text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[16px] font-semibold text-red-500">
                          closed
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="font-semibold text-[16px] py-3">
                    About the Job
                  </h4>
                  <p className="text-[16px] text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] py-3">
                    About the Job
                  </h4>
                  <p className="text-[16px] text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] py-3">
                    About the Job
                  </h4>
                  <p className="text-[16px] text-black/80 leading-[35px]">
                    * Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> * sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. <br />
                    * Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. <br /> * sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. <br /> * Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. <br /> *
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. <br /> *
                    Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] py-3">
                    Recruiters info
                  </h4>
                  <p className="text-[16px] text-black/80 leading-[35px]">
                    * Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> * sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. <br />
                    * Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. <br /> * sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. <br /> * Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. <br /> *
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. <br /> *
                    Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>
                <Button>
                  <FaFlag />
                  Report Job
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-[15px] space-y-[20px] w-[30%]  shadow-2xl px-4 py-7 ">
            <h3>Recruiters info</h3>
            <div
              className="flex gap-2 items-center
          "
            >
              <Image src={avatar} className="h-[50px] w-[50px] rounded-full" />
              <div>
                <h4 className="font-semibold text-[16px]">Usman Zafar</h4>
                <p className="text-[14px]">usmanzafar@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Call size="22" className="text-primary" variant="Bold" />{" "}
              youraddress@yahoo.com
            </div>
            <div className="flex gap-2">
              <Call size="22" className="text-primary" variant="Bold" />
              (219) 565-0114
            </div>
            <Button fullWidth className="font-bold">
              refer a candidate
            </Button>
            <div className="flex gap-2 w-full items-center">
              <Button className="bg-primary text-white py-3 h-full" fullWidth>
                Apply Now
              </Button>
              <Button size="sm" className="bg-gray-200 h-full text-black py-3">
                <Image src={Ghost} />
              </Button>
            </div>
          </div>
        </section>
        <Doctor />
      </Layout>
    </>
  );
};

export default page;
