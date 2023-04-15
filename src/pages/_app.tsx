import React from 'react';
import App from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyle } from 'src/components/styles/GlobalStyle';
import Head from 'next/head';

function app({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta property='og:title' content="Habit Hacker"/>
        <meta property='og:description' content="Bet your money on changing your habits!"/>
        <meta property='og:image' content='https://firebasestorage.googleapis.com/v0/b/image-upload-39ea1.appspot.com/o/images%2Fog%2Fog_img.png?alt=media&token=fb0b1d96-4336-44ac-99dc-400f1f519134'/>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
   
app.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  
  return { ...appProps }
}

export default app;