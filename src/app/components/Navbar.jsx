"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const { data: session } = authClient.useSession()
  const user = session?.user;
  console.log(user);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/SkillSphere-logo.png"
            alt="logo"
            width={140}
            height={50}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-courses" className="hover:text-blue-600 transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/my-profile" className="hover:text-blue-600 transition">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">

          {user ? (
            <div className="flex items-center gap-3">

              {/* Name */}
              <span className="text-gray-700 font-medium">
                {user.name}
              </span>

              {/* Profile Image */}
              <Image
                src={user.image || "/default-user.png"}
                alt="user"
                width={40}
                height={40}
                className="rounded-full object-cover border"
              />

              {/* Logout */}
              <Button
                onClick={() => authClient.signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </Button>

            </div>
          ) : (
            <>
              <Link href="/login">
                <Button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200">
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  Register
                </Button>
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Toggle */}
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

          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <Link href="/" onClick={handleClose} className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-courses" onClick={handleClose} className="block hover:text-blue-600">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/my-profile" onClick={handleClose} className="block hover:text-blue-600">
                My Profile
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-2">

            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <Image
                    src={user.image || "/default-user.png"}
                    alt="user"
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                  <span className="font-medium">{user.name}</span>
                </div>

                <Button
                  onClick={() => {
                    authClient.signOut();
                    handleClose();
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded-lg"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={handleClose}>
                  <Button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg">
                    Login
                  </Button>
                </Link>

                <Link href="/register" onClick={handleClose}>
                  <Button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                    Register
                  </Button>
                </Link>
              </>
            )}

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;