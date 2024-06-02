"use client";
import React from 'react';
import Image from 'next/image';
import solyartPhotos from "/Test-Example/my-next/public/images/solyartphotos.jpg"
import cottonBro from "/Test-Example/my-next/public/images/cottonbro.jpg"
import { useRouter } from "next/navigation";

type Props = {}

const CardBody = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col pt-[100px] items-center">
        <div className="p-5 flex flex-row gap-3">
          <Image
            src={solyartPhotos}
            width={300}
            height={300}
            alt="solyartPhotos"
            className="rounded-[10px] cursor-pointer"
            onClick={()=>{router.push("/CardOne")}}
          />

          <Image
            src={cottonBro}
            width={300}
            height={300}
            alt="cottonBro"
            className="rounded-[10px]"
          />
        </div>

        <div className="p-5">
          <Image
            src={cottonBro}
            width={523}
            height={500}
            alt="cottonBro"
            className="rounded-[10px]"
          />
        </div>
      </div>
    </>
  );
};

export default CardBody;