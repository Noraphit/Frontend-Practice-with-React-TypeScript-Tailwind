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
      <div>
        <img src={data[0].url} alt="Cat" height={150} width={150} />
        <img src={data[1].url} alt="Cat" height={150} width={150} />
        <img src={data[2].url} alt="Cat" height={150} width={150} />
        {/* <Image
          src={data[0].url}
          width={300}
          height={300}
          alt="Cat"
          className="rounded-[10px] cursor-pointer"
        /> */}
      </div>
    </>
  );
};
