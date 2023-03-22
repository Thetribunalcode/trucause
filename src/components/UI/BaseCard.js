import React from "react";

export default function BaseCard(props) {
  return (
    <>
      {" "}
      <div
        href='#'
        className='p-10 mr-44 bg-white border-black font-bold rounded-lg transition-all ease-in duration-75 hover:bg-violet-200'>
        <h5 className='mb-2 text-2xl font-space tracking-tight font-semibold text-black'>
          {props.title}
        </h5>
        <p className='font-normal text-xl text-black'>
          {props.content}
        </p>
        <div className="mt-10 ">{props.children}</div>
      </div>
    </>
  );
}
