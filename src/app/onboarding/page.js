import React from "react";
import RegisterOnboard from "../../components/Pages/RegisterOnboard"
import Image from "next/image";

export default function Page() {
  return (
      <>
          {/* <h1>Oh oh! Looks like you need to register first. Lets get you onboard</h1> */}
          <div className='flex flex-row justify-center items-center text-center mt-44 mb-44'>
              <div>
                  <h1 className="block font-heading text-2xl text-white font-semibold">Oh oh! Looks like you need to register first.
                  </h1>
                  <h1 className="block font-heading text-2xl text-white font-semibold">Lets get you onboard
                  </h1>
              </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-5 mt-44 mb-44'>
             
              
           <Image
          src='/register.png'
          height={500}
          width={500}
            alt='dummy'
          />
              <div className='mr-44 pl-10 ml-10'>
                  <RegisterOnboard />
              </div>
          </div>
      </>
  );
}