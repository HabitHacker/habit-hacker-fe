import React from 'react';
import App from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyle } from 'src/components/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { configureChains, createClient, sepolia, WagmiConfig } from 'wagmi';
import { publicProvider } from '@wagmi/core/providers/public';

const { provider, webSocketProvider } = configureChains(
  [sepolia],
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  provider,
})

function app({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <RecoilRoot>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecoilRoot>
      </WagmiConfig>
    </ChakraProvider>
  );
}
   
app.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  
  return { ...appProps }
}

export default app;