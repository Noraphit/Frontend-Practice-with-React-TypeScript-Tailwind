"use client";
import React from 'react';
import { useRouter } from "next/navigation";

type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center py-5">
        <div className="fixed">
          <div className="bg-[#e8e5e480] rounded-full px-2 py-1 w-[198px]">
            <button className="bg-white rounded-full px-6 py-2 text-[#000000] text-[14px] font-[400]" onClick={() => router.push("/")}>Home</button>
            <button className="px-6 py-2 text-[#000000] text-[14px] font-[400]" onClick={() => router.push("/Contact")}>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;