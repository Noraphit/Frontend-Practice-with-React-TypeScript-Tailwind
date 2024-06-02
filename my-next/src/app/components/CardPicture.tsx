"use client";
import React from 'react';
import Image from 'next/image';

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  return res.json()
}

export default async function page() {
  const data = await getData()
  console.log(data)

  return (
    <>
      <div className="flex flex-col pt-[100px] items-center">
        <div className="p-5 gap-3">
          <div className="flex flex-row p-5 gap-5">
            <img src={data[0].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
            <img src={data[1].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[2].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
            <img src={data[3].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[4].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
            <img src={data[5].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[6].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
            <img src={data[7].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[8].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]"/>
            <img src={data[9].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px]" />
          </div>
        </div>
      </div >
    </>
  );
};
