"use client";
import React from 'react';
import BackButton from '../components/BackButton';
import Contact from '../components/Contact';
import BodyCatTwo from '../components/BodyCatTwo';
import BodyCat from '../components/BodyCat';
import Overview from '../components/Overview';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <BackButton />

      <div className="">
        <div className="p-[40px] h-[45vh] flex flex-row justify-center items-end">
          <p className="font-[500] text-[72px] w-[980px] leading-[85px] text-center">A luxury jewellery brand rich in heritage</p>
        </div>

        <div className="flex justify-center gap-2">
          <div className="px-3 py-[6px] bg-[#e8e5e480] rounded-[19px]">
            <p className="text-[14px] font-[400]">Ronald Abram</p>
          </div>
        </div>
      </div>
      <div className="p-[15px] container pt-[50px] mx-auto">
        <BodyCat />

        <div className="px-[255px] relative py-10">
          <div className="flex flex-col">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
              <p className="text-[#7f7f7f] text-[14px] font-[400]">Client</p>
              <p className="text-[#7f7f7f] text-[14px] font-[400]">Studio</p>
              <p className="text-[#7f7f7f] text-[14px] font-[400]">Role</p>
              <p className="text-[#7f7f7f] text-[14px] font-[400]">Focus</p>
            </div>

            <div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
              <p className="text-[#000000] text-[14px] font-[400]">Ronald Abram</p>
              <p className="text-[#000000] text-[14px] font-[400]">Onstate</p>
              <p className="text-[#000000] text-[14px] font-[400]">Lead Designer</p>
              <p className="text-[#000000] text-[14px] font-[400]">Brand Identity</p>
            </div>
          </div>
        </div>

        <BodyCatTwo />

        <div className="px-[255px] relative py-10">
          <p className="text-[#7f7f7f] text-[16px] font-[500]">Overview</p>
          <p className="w-[540px] text-[14px] font-[400]">I crafted a series of user interfaces for their ecommerce platform.
            To supplement the designs I also art directed a range of imagery inspired by Monokel's Scandinavian heritage.</p>
        </div>

        <Overview />
        
        <Contact className="h-[400px]" />
      </div>
    </>
  );
};

export default page;