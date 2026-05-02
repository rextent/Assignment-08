"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/SkillSphere-logo.png"
            alt="logo"
            width={140}
            height={50}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition"><Link href={'/'}>Home</Link></li>
          <li className="hover:text-blue-600 cursor-pointer transition"><Link href={'/all-courses'}>Courses</Link></li>
          <li className="hover:text-blue-600 cursor-pointer transition"><Link href={'/my-profile'}>My Profile</Link></li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {open ? (
            <FaTimes size={22} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <FaBars size={22} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer"><Link>Home</Link></li>
            <li className="hover:text-blue-600 cursor-pointer"><Link>Courses</Link></li>
            <li className="hover:text-blue-600 cursor-pointer"><Link>My Profile</Link></li>
          </ul>

          <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Login
          </Button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;