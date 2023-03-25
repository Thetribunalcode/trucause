import { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Login(props) {
  const [type, setType] = useState("volunteer");
  const router = useRouter();
  const selectedTypeStyles =
    "p-4 m-2 text-white text-xl rounded w-full transition duration-500 ease-in-out  ";

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      // Modify dashboard component and put that route here
      props.setAccount({
        address: address,
        type: type,
        network: "ethereum",
      });
      console.log(type)
    }
  }, []);

  return (
    <div className='flex flex-col justify-center space-y-8 items-center text-white'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-black'>
        <div className='px-6 py-4 flex flex-col justify-center relative'>
          <div className='container mb-2 flex flex-col items-center py-3 gap-y-2 space-y-4'>
            <div>
              <span className='font-bold font-space text-4xl'>Join Us</span>
            </div>
            <div>
              <p className='container font-light font-sub text-xl text-center '>
                Why not make earth better{" "}
                <span className='text-yellow-100 font-semibold'>together?</span>
              </p>
            </div>
            <div className='flex items-center border border-gray-200 rounded-xl w-full text-center'>
              <button
                id='bordered-radio-1'
                value='volunteer'
                name='type'
                onClick={(e) => {
                  setType(e.target.value);
                }}
                className={
                  selectedTypeStyles +
                  (type === "volunteer" ? "bg-amber-500" : null)
                }>
                Volunteer
              </button>
              |
              <button
                id='bordered-radio-1'
                value='ngo'
                name='type'
                onClick={(e) => {
                  setType(e.target.value);
                }}
                className={
                  selectedTypeStyles + (type === "ngo" ? "bg-amber-500" : null)
                }>
                NGO
              </button>
            </div>
            <div>
              {" "}
              <ConnectButton
                accountStatus='address'
                chainStatus='name'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
