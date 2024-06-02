"use client";
import React from 'react';
import Link from 'next/link';

type Props = {
  className?: string;
}

const Contact = (props: Props) => {
  return (
    <>
      <div className={`relative w-[100%] flex flex-col justify-center items-center h-[90vh] ${props.className}`}>
        <div className="text-center">
          <p className="text-[#000000] text-[36px] font-[500] leading-[1.25em] w-[350px]">Let's work together. <span className="text-[#7f7f7f] text-[36px] font-[500] leading-[1.25em]"><Link href={"mailto:oli@oh.studio"}>Get in touch.</Link></span></p>
        </div>
      </div>
    </>
  );
};

export default Contact;