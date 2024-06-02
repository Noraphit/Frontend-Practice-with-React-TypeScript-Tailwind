"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
};

export default page;