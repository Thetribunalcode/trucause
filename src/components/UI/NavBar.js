import Image from "next/image";
import "../../app/globals.css";
import styles from "../../app/page.module.css";

export default function NavBar() {
  return (
    <>
      <nav className='w-full fixed z-40 '>
        <div className='flex flex-row justify-between items-center mx-auto px-2 my-0'>
          <a
            href='#'
            className='flex items-center'>
            <Image
              width={150}
              height={50}
              src='/png/logo-white-1.png'
              alt='trucause Logo'
            />
          </a>
          <div className='flex mr-10 items-center text-slate-50 font-light text-2xl '>
            <a
              href='#'
              className='mr-6  hover:text-black'>
              About
            </a>
            <a
              href='#'
              className=' hover:text-black'>
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
