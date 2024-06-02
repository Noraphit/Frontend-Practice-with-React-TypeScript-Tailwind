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
          <p className="font-[500] text-[72px] w-[980px] leading-[85px] text-center">A better way to deal with everyday</p>
        </div>

        <div className="flex justify-center gap-2">
          <div className="px-3 py-[6px] bg-[#e8e5e480] rounded-[19px]">
            <p className="text-[14px] font-[400]">Aire</p>
          </div>
        </div>
      </div>
      <Contact
        className="h-[50vh]" />
    </>
  );
};

export default page;