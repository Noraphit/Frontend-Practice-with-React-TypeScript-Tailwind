"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

type Props = {};

function BackButton({ }: Props) {
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleBack = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      router.back();
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1000);
    }
  };
  return (
    <div className="flex justify-center py-5">
      <div className="fixed">
        <button className="bg-[#e8e5e480] rounded-full px-3 py-3 text-[#000000] text-[14px] font-[400]" onClick={handleBack}
          disabled={isButtonDisabled}>
          <Image
            src="/images/x-regular-24.png"
            width={20}
            height={20}
            alt="x"
            className="rounded-[10px] cursor-pointer"
            onClick={() => { router.push("/CardOne") }}
          /></button>
      </div>
    </div>
  );
}

export default BackButton;
