"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Topic from '../components/Topic';
import CardBody from '../components/CardBody';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Topic />
      <CardBody />
    </>
  );
};

export default page;