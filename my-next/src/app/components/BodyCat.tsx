import React from 'react';
import Overview from './Overview';

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return res.json();
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function BodyCat() {
  const data = await getData();

  return (
    <>
      <div className="w-[100%] flex justify-center">
        <img src={data[0].url} alt="Cat" className="rounded-[11px] w-[1000px] h-[700px]" />
      </div>
    </>
  );
};