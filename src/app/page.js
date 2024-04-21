// 'use client'
import Box from "@/components/Box";
import Console from "@/components/Console";
import Toggle from "@/components/Toggle";
// import { useEffect, useState } from "react";


export default async function Home() {

 
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

  const response = await fetch('https://demo3005513.mockable.io/web/modes')
  .then(response => response.json());



  return (
    <>
        <Toggle data={response} />
        <Box />
    </>
  );
}
