"use client";
import React from 'react'

type Props = {}

const Topic = (props: Props) => {
  return (
    <>
      <div className="">
        <div className="p-[40px] h-[55vh] flex flex-row justify-center items-end">
          <p className="font-[500] text-[72px] w-[980px] leading-[85px] text-center">A brand and product designer working with clients globally</p>
        </div>

        <div className="flex justify-center gap-2">
          <div className="px-3 py-[6px] bg-white">
            <p className="text-[14px] font-[400]">Expertise</p>
          </div>
          <div className="px-3 py-[6px] bg-[#e8e5e480] rounded-[19px]">
            <p className="text-[14px] font-[400]">Branding</p>
          </div>
          <div className="px-3 py-[6px] bg-[#e8e5e480] rounded-[19px]">
            <p className="text-[14px] font-[400]">Product</p>
          </div>
          <div className="px-3 py-[6px] bg-[#e8e5e480] rounded-[19px]">
            <p className="text-[14px] font-[400]">Design Systems</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;