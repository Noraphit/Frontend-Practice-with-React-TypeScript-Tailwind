import React from 'react';

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return res.json();
}

export default async function Overview() {
  const data = await getData();

  return (
    <>
      <div className="w-[100%] flex justify-center pt-5">
        <img src={data[3].url} alt="Cat" className="rounded-[11px] w-[1000px] h-[700px]" />
      </div>

      <div className="">
        <div className="flex flex-row justify-center p-5 gap-5">
          <img src={data[4].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
          <img src={data[5].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
        </div>
      </div>

      <div className="w-[100%] flex justify-center pb-5">
        <img src={data[6].url} alt="Cat" className="rounded-[11px] w-[1000px] h-[700px]" />
      </div>

      <div className="w-[100%] flex justify-center pb-5">
        <img src={data[7].url} alt="Cat" className="rounded-[11px] w-[1000px] h-[700px]" />
      </div>

      <div className="w-[100%] flex justify-center pb-5">
        <img src={data[8].url} alt="Cat" className="rounded-[11px] w-[1000px] h-[700px]" />
      </div>

      <div className="w-[100%] flex justify-center pb-5">
        <img src={data[9].url} alt="Cat" className="rounded-[11px] w-[1000px] h-[700px]" />
      </div>

      <div className="">
        <div className="flex flex-row justify-center gap-5">
          <img src={data[2].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
          <img src={data[6].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
        </div>
      </div>
    </>
  );
};