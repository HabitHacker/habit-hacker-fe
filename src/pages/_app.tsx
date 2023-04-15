import React from 'react';
import App from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyle } from 'src/components/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';

function app({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}
   
app.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  
  return { ...appProps }
}

export default app;