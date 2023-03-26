'use client';

import React from "react";
import Register from "../../../components/Pages/Register";
import Image from "next/image";
import UploadTest from "../../../components/Pages/UploadTest";

export default function page() {
  return (
    <>
      <div className='flex flex-row justify-center items-center mt-44 mb-44'>
        <UploadTest />
      </div>
      <div className='flex flex-row justify-center items-center mt-44 mb-44'>
        <div className='mr-44'>
          <Register />
        </div>
        <Image
          src='/register.png'
          height={500}
          width={500}
          alt=''
        />
      </div>
    </>
  );
}
