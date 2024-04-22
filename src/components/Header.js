// components/Header.js
"use client";
import React from "react";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <header>
      <nav className="flex w-full  justify-between  py-4 px-10 items-center">
        <div className="flex font-bold">
          <Image src={Logo} alt="Logo" className="w-[48px] h-[48px]" />
          Logo <br />
          Here
        </div>
        <ul className="hidden lg:flex gap-6 items-center font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Reviews</Link>
          </li>
          <li>
            <Link href="/jobs">My Clients</Link>
          </li>
          <li>
            <Link href="/jobs">Contacts</Link>
          </li>
          <Link href="/jobs">
            <Button size="lg" className="bg-[#018870] text-white">
              See the current openings
              <ArrowUpRight />
            </Button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
