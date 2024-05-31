"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { user, isSignedIn } = useUser();
  const [mobile, setMobile] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  const handleMobile = () => {
    setMobile((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          !isSignedIn && "hidden"
        } bg-[#080606] bg-opacity-50 h-20 pt-8 px-[5%] fixed top-0 z-30 shadow-md w-full flex items-center justify-between`}
      >
        <Link href="/" className="font-bold text-white text-3xl">
          Logo
        </Link>

        <div className="sm:flex items-center gap-10 hidden">
          <Link href="/" className="font-medium text-white text-lg">
            Home
          </Link>
          <Link href="/about" className="font-medium text-white text-lg">
            About
          </Link>
        </div>

        <div className="flex items-center sm:gap-10 gap-7">
          <form
            className="hidden sm:flex items-center gap-8"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-5 border border-gray-200 rounded-2xl w-64 h-10 px-4">
              <input
                type="text"
                className="border-none outline-none text-gray-200 w-[90%] bg-transparent"
                placeholder="Search everything"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="disabled:cursor-none" disabled={!search}>
                <FaSearch className="text-white text-lg" />
              </button>
            </div>
          </form>

          {/* <Image
          src="/user-img.png"
          alt="user-image"
          width={40}
          height={40}
          className="rounded-full"
        /> */}

          <GiHamburgerMenu
            className="block sm:hidden text-white cursor-pointer text-2xl"
            onClick={handleMobile}
          />
          {isSignedIn && <UserButton className='z-50' />}
        </div>
      </div>
      8
      {mobile && (
        <div className="w-36 h-36 shadow-xl bg-gray-950 z-40 text-white absolute right-[5%] top-28 p-5 rounded-xl flex flex-col gap-7">
          <Link href="/" className="font-medium text-white text-xl">
            Home
          </Link>
          <Link href="/about" className="font-medium text-white text-xl">
            About
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
