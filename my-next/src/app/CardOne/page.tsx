import React from 'react'
import BackButton from '../components/BackButton';
import Contact from '../components/Contact';
import BodyCat from '../components/BodyCat';
import BodyCatTwo from '../components/BodyCatTwo';
import Overview from '../components/Overview';

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <BackButton />

      <div className="pb-10">
        <div className="p-[40px] h-[45vh] flex flex-row justify-center items-end">
          <p className="font-[500] text-[72px] w-[980px] leading-[85px] text-center">A better way to deal with everyday</p>
        </div>

        <div className="flex justify-center gap-2">
          <div className="px-3 py-[6px] bg-[#e8e5e480] rounded-[19px]">
            <p className="text-[14px] font-[400]">Aire</p>
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
              <p className="text-[#000000] text-[14px] font-[400]">Aire</p>
              <p className="text-[#000000] text-[14px] font-[400]">OH&CO</p>
              <p className="text-[#000000] text-[14px] font-[400]">Creative Director</p>
              <p className="text-[#000000] text-[14px] font-[400]">Brand Identity</p>
            </div>
          </div>
        </div>

        <BodyCatTwo />

        <div className="px-[255px] relative py-10">
          <p className="text-[#7f7f7f] text-[16px] font-[500]">Overview</p>
          <p className="w-[540px] text-[14px] font-[400]">I worked with Aire to develop a brand that firmly positions them as a premium lifestyle brand.
            The name Aire was inspired by the companies conception in Aire Street Workshops, in addition to aligning well with how the product makes you feel.
            The wordmark has been designed to convey the feeling of ease and simplicity whilst encapsulating a premium feel.
            Aire believes in the power of CBD to help people manage the day to day a little better — so I developed a strap-line which embodied that message.
            A better way to deal with every day.</p>
        </div>

        <Overview />
        
        <Contact className="h-[400px]" />
      </div>
    </>
  );
};
