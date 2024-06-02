"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import CardPicture from "./CardPicture";

type Props = {}

const CardBody = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <CardPicture />
    </>
  );
};

export default CardBody;