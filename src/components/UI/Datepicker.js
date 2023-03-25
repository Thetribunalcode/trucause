"use client";
import React, { useState } from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Datepicker(props) {
  return (
    <>
      <div class='mt-4 text-base font-space text-gray-900'>
        {props.time}
      </div>
      <DemoContainer components={["DatePicker"]}>
        { (props.disabled === 'disabled') ? <DatePicker disabled/> : <DatePicker />}
      </DemoContainer>
    </>
  );
}
