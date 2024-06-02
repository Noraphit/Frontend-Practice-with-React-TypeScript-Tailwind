import React from 'react';
import { useRouter } from "next/navigation";

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return res.json();
}

export default async function page() {
  const router = useRouter();
  const data = await getData();
  
  return (
    <>
      <div className="flex flex-col pt-[100px] items-center">
        <div className="p-5 gap-3">
          <div className="flex flex-row p-5 gap-5">
            <img src={data[0].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardOne")} />
            <img src={data[1].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardTwo")} />
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[2].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardThree")} />
            <img src={data[3].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardFour")} />
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[4].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardFive")} />
            <img src={data[5].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardSix")} />
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[6].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardSeven")} />
            <img src={data[7].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardEight")}/>
          </div>

          <div className="flex flex-row p-5 gap-5">
            <img src={data[8].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardNine")} />
            <img src={data[9].url} alt="Cat" className="rounded-[11px] w-[650px] h-[450px] hover:blur-sm cursor-pointer" onClick={() => router.push("/CardTen")} />
          </div>
        </div>
      </div >
    </>
  );
};
