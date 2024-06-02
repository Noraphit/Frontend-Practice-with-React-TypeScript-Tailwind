import React from 'react'
import BackButton from '../components/BackButton';
import Contact from '../components/Contact';
import BodyCat from '../components/BodyCat';

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

      <BodyCat />

      <Contact className="h-[400px]" />
    </>
  );
};
