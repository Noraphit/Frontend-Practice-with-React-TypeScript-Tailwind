import React from 'react';

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return res.json();
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function BodyCat() {
  const data = await getData();

  return (
    <>
      <div className="p-[15px] container pt-[50px] mx-auto">
        <div className="w-[100%] flex justify-center">
          <img src={data[0].url} alt="Cat" className="rounded-[11px] w-[1000px] h-[700px]" />
        </div>

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

        <div className="">
          <div className="flex flex-row justify-center p-5 gap-5">
            <img src={data[1].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
            <img src={data[2].url} alt="Cat" className="rounded-[11px] w-[490px] h-[300px]" />
          </div>
        </div>

        <div className="px-[255px] relative py-10">
          <p className="text-[#7f7f7f] text-[16px] font-[500]">Overview</p>
          <p className="w-[540px] text-[14px] font-[400]">I worked with Aire to develop a brand that firmly positions them as a premium lifestyle brand.
            The name Aire was inspired by the companies conception in Aire Street Workshops, in addition to aligning well with how the product makes you feel.
            The wordmark has been designed to convey the feeling of ease and simplicity whilst encapsulating a premium feel.
            Aire believes in the power of CBD to help people manage the day to day a little better — so I developed a strap-line which embodied that message.
            A better way to deal with every day.</p>
        </div>

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

      </div>
    </>
  );
};