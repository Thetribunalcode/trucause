"use client";

import React from "react";
import sendNotification from "../../../interfaces/SendPush";
import { useState } from "react";


import { useRouter} from "next/navigation";

import axios from "axios";
import Datepicker from "../UI/Datepicker";
import { useAccount } from "wagmi";

export default function Register() {
  const handleEvent = (e) => {
    e.preventDefault();

    console.log(name, location);
  };
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6 " onSubmit={handleEvent}>
          <h5 className="text-2xl font-space text-gray-900 dark:text-white">
            Please enter your details
          </h5>
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-base font-space text-gray-900 dark:text-white"
            >
              Name of the NGO
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 placeholder:font-space	 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
              placeholder="Trust for Animals"
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-base font-space text-gray-900 dark:text-white"
            >
              Location of the NGO
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Parc de la Cité"
              className="bg-gray-50 border border-gray-300 placeholder:font-space text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white !bg-amber-700 hover:!bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-space rounded-lg text-xl px-5 py-2.5 text-center "
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
