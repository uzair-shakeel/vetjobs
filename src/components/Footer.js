// components/Footer.js
import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import { Button } from "@nextui-org/react";
import { Call, Facebook, Instagram } from "iconsax-react";
import { MdEmail } from "react-icons";

const Footer = () => {
  return (
    <footer className="flex justify-between border-b border-[#171848]/10 py-4 px-10 ">
      <div className="max-w-[45%]  px-[5%] space-y-[25px] border-r border-[#171848]/10 pr-4">
        <div className="flex font-bold">
          <Image src={Logo} alt="Logo" className="w-[48px] h-[48px]" />
          Logo <br />
          Here
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className="bg-[#018870] rounded-full p-2 px-4 flex text-white gap-4 max-w-[40%]">
          <Facebook size="25" variant="Bold" />
          <Facebook size="25" variant="Bold" />
          <Instagram size="25" variant="Bold" />
          <Instagram size="25" variant="Bold" />
        </div>
      </div>

      <div className="flex justify-between w-full px-[5%]">
        <div>
          <h4 className="text-[18px] font-semibold py-3">For Employee</h4>
          <ul className="text-[#171848]/60 space-y-2 text-[16px]">
            <li>Jobs in Sydney</li>
            <li>Jobs in Melbourne</li>
            <li>Jobs in Perth</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] font-semibold py-3">For Employer</h4>
          <ul className="text-[#171848]/60 space-y-2 text-[16px]">
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] font-semibold py-3">Connect with us</h4>
          <ul className="text-[#171848]/60 space-y-2 text-[16px]">
            <li className="flex gap-1">
              <Call size={18} variant="Bold" />
              youraddress@yahoo.com
            </li>
            <li className="flex gap-1">
              <Call size="18" variant="Bold" />
              (219) 565-0114
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
