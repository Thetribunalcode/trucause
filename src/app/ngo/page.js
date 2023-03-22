"use client";

// <------------- rainbow kit imports ------------->
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// <------------- rainbow kit imports ------------->


// <-------------  setting up rainbow kit ------------->



const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  connectors,
  provider
})


// <-------------  setting up rainbow kit ------------->

import Landing from "../components/Pages/Landing";
import NavBar from "../components/UI/NavBar";
import Login from '../components/Pages/Login'
import "./globals.css";


export default function Home() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Landing />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
