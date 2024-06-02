import React from 'react';
import Overview from './Overview';

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return res.json();
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function BodyCatTwo() {
  const data = await getData();

  return (
    <>
      <div className="">
        <div className="flex flex-row justify-center p-5 gap-5">
          <img src={data[1].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
          <img src={data[2].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
        </div>
      </div>
    </>
  );
};