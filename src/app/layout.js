"use client";

import './globals.css'
// <------------- rainbow kit imports ------------->
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

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

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider coolMode chains={chains} theme={darkTheme({ accentColor: '#E09F1A', borderRadius: 'large', fontStack: 'system' })}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html >

  )
}
