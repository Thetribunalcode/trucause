import React from "react";

import Datepicker from "../UI/Datepicker";
import TimePicker from "../UI/TimePicker";

export default function Register() {
  return (
    <>
      <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8'>
        <form
          className='space-y-6 '
          action='#'>
          <h5 className='text-2xl font-space text-gray-900 dark:text-white'>
            Add a new activity
          </h5>
          <div>
            <label
              htmlFor='location'
              className='block mb-2 text-base font-space text-gray-900 dark:text-white'>
              Activity Name
            </label>
            <input
              type='text'
              name='location'
              id='location'
              className='bg-gray-50 border border-gray-300 placeholder:font-space	 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5'
              placeholder='Park cleanup'
              required
            />
          </div>
          <div>
            <label
              htmlFor='location'
              className='block mb-2 text-base font-space text-gray-900 dark:text-white'>
              Location
            </label>
            <input
              type='text'
              name='location'
              id='password'
              placeholder='Parc de la Cité'
              className='bg-gray-50 border border-gray-300 placeholder:font-space text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              required
            />
          </div>
          <TimePicker time='Shift Start time'></TimePicker>
          <TimePicker time='Shift End time'></TimePicker>
          <Datepicker time='Start date'></Datepicker>
          <Datepicker time='End-date'></Datepicker>
          <button
            type='submit'
            className='w-full text-white !bg-amber-700 hover:!bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-space rounded-lg text-xl px-5 py-2.5 text-center '>
            Add
          </button>
        </form>
      </div>
    </>
  );
}
