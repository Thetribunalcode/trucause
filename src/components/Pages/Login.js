import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import BaseCard from "../UI/BaseCard";

import RadioButton from "../UI/RadioButton";


export default function Login() {
  return (
    <>
      <section
        id='login'
        className='flex justify-center items-center bg-black'>
        <div className='p-10 mt-4 mr-3.5'>
          <Image
            src='/login.png'
            width={5000}
            height={50}
            alt='trucause Logo'
          />
        </div>
        <BaseCard
          title='Jump right in !'
          content='Ut cupidatat anim fugiat ea aute sit. Aliqua aliqua nostrud deserunt elit ad id culpa commodo pariatur irure anim commodo. Velit consectetur dolor ex commodo commodo ullamco irure aliquip nisi quis esse. Aliquip ex elit ut Lorem veniam elit culpa aliqua proident dolor voluptate deserunt. Sunt qui occaecat adipisicing ipsum est cillum deserunt proident est quis velit ut Lorem culpa. Nulla labore dolore est mollit sit proident et. Ea aliqua aliqua est do quis proident tempor anim labore culpa Lorem deserunt est.'>
          <div className='flex flex-row '>
            <RadioButton />
            <ConnectButton />
          </div>
        </BaseCard>
      </section>
    </>
  );
}
