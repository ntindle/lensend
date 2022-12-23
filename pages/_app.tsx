import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import { rtlCache } from '../rtl-cache';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { createContext, useContext, useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react'
import { useLocalStorage } from '../components/LocalStorage';
import { LensContextProvider } from '../components/Context/LensProvider';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    // chain.polygonMumbai,
    // chain.optimism,
    // chain.arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.polygonMumbai]
      : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: 'bPBqiBoYhjbUovfWetVc6r5u-UvGhdBf',
    }),
    publicProvider(),
  ]
);

const getApolloClient = (network: string) => new ApolloClient({
  uri: network === 'MAINNET' ? 'https://api.lens.dev' : 'https://api-mumbai.lens.dev',
  cache: new InMemoryCache()
});

const { connectors } = getDefaultWallets({
  appName: 'Lensend.xyz',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export const AppContext = createContext<{
  network: string,
  setNetwork: Function,
  accessToken: string,
  refreshToken: string,
  setAccessToken: Function,
  setRefreshToken: Function,
  // session: { accessToken?: string, refreshToken?: string },
  // setSession: Function
}>({
  network: 'MAINNET',
  setNetwork: () => { },
  accessToken: '',
  refreshToken: '',
  setAccessToken: () => { },
  setRefreshToken: () => { },
});

function MyApp({ Component, pageProps }: AppProps) {
  // const initialNetwork = query.get('network') === 'TESTNET' ? 'TESTNET' : 'MAINNET';
  // const query = new URLSearchParams(window.location.search);


  const initialNetwork = 'MAINNET';
  const [network] = useState(initialNetwork);

  // const [accessToken, setAccessToken] = useLocalStorage<string>('accessToken', '')
  // const [refreshToken, setRefreshToken] = useLocalStorage<string>('refreshToken', '')

  const setNetwork = (network: string) => window.location.href = `${window.location.origin}/?network=${network}`;

  const apolloClient = getApolloClient(network);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={rtlCache}>
      <LensContextProvider>
        {/* <AppContext.Provider value={{ network, setNetwork, accessToken, refreshToken, setAccessToken, setRefreshToken }}> */}
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
              <Analytics />
            </ApolloProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </LensContextProvider>
      {/* </AppContext.Provider> */}
    </MantineProvider>
  );
}



export default MyApp;
