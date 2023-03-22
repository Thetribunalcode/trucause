"use client";

import Landing from "../components/Pages/Landing";
import NavBar from "../components/UI/NavBar";
import Login from '../components/Pages/Login'
import "./globals.css";

import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function Home() {

  const { isConnected } = useAccount();

  const { account, setAccount } = useState(null);;

  useEffect(() => {
    if (isConnected && account) {
      console.log(account)
      // If wallet is already connected, push them to dashboard
    }
  }, [account]);


  return (
    <>
      <NavBar />
      <Landing />
      <Login setAccount={setAccount} />
    </>
  );
}
