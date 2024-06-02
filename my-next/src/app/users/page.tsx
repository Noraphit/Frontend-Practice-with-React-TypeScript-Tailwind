"use client";
import React from 'react';

async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  return res.json()
}

export default async function page() {
  const data = await getData()

  return (
    <>
      <div>
        
      </div>
    </>
  );
};
