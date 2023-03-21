import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Login() {
  return (
    <>
      <section
        id='login'
        className='flex justify-center items-center bg-black'>
        <div className='p-10 mt-4 mr-3.5'>
          <Image
            src='/login.png'
            width={8000}
            height={50}
            alt='trucause Logo'
          />
        </div>
        <div className='login-group p-10'>
          <p className='text-purple-100 text-xl mb-6 font-space'>
            Sint nisi nostrud ut mollit dolore esse culpa commodo voluptate.
            Aliquip amet occaecat elit aliquip incididunt aute aliqua eu anim
            commodo minim aliquip dolor. Id adipisicing qui magna quis commodo
            aliquip reprehenderit ea nisi eu. Exercitation ex cillum sunt velit
            ullamco adipisicing proident ad anim. Duis laboris non mollit elit
            occaecat dolor nostrud magna fugiat aliqua cillum incididunt duis
            Lorem. Eiusmod consectetur minim ullamco nostrud ea exercitation do
            Lorem deserunt.
          </p>
          <div className=''>
            <ConnectButton />
          </div>
        </div>
      </section>
    </>
  );
}
