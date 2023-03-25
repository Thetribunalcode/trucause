"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { TimepickerUI } from "timepicker-ui";

export default function TimePicker(props) {
  const tmRef = useRef(null);
  const [inputValue, setInputValue] = useState("12:00 PM");

  const testHandler = useCallback(({ detail: { hour, minutes, type } }) => {
    setInputValue(`${hour}:${minutes} ${type}`);
  }, []);

  useEffect(() => {
    if (inputValue === "10:00 PM") {
      alert("You selected 10:00 PM");
    }
  }, [inputValue]);

  useEffect(() => {
    const tm = tmRef.current;

    const newPicker = new TimepickerUI(tm, {});
    newPicker.create();

    tm.addEventListener("accept", testHandler);

    return () => {
      tm.removeEventListener("accept", testHandler);
    };
  }, [testHandler]);

  return (

    <div
      className='timepicker-ui'
      ref={tmRef}>
      <label
        for='form1'
        class='mb-2 mr-44 text-medium font-space text-gray-900 dark:text-white'>
        {props.time}
      </label>
      <input
        id='form1'
        type='test'
        className='timepicker-ui-input'
        value={inputValue}
      />
    </div>
  );
}
