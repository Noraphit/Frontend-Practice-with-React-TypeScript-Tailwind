"use client";
import React from 'react';
import BackButton from '../components/BackButton';
import Contact from '../components/Contact';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <BackButton />

      <div className="">
        <div className="p-[40px] h-[45vh] flex flex-row justify-center items-end">
          <p className="font-[500] text-[72px] w-[1100px] leading-[85px] text-center">A new interface for the My5 app</p>
        </div>

        <div className="flex justify-center gap-2">
          <div className="px-3 py-[6px] bg-[#e8e5e480] rounded-[19px]">
            <p className="text-[14px] font-[400]">Channel 5</p>
          </div>
        </div>
      </div>
      <Contact
        className="h-[400px]" />
    </>
  );
};

export default page;