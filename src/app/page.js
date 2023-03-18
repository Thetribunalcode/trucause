import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import NavBar from "../components/UI/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <div className='hero flex-row relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
          <h1 className='text-banner leading-tight tracking-tight	text-center mt-10 font-extrabold font-space z-30 text-white bg-opacity-50 rounded-xl'>
            Volunteer now <br></br> for a good cause.<br></br>
            <p className='block text-2xl text-center leading-tight tracking-tight mt-10 font-space font-light z-30 text-white bg-opacity-50'>
              To save the world , one step at a time.
            </p>
          </h1>
          <video
            className='absolute w-auto min-w-full min-h-full max-w-none'
            autoPlay
            muted
            loop>
            <source
              src='/bg-1.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </>
  );
}
