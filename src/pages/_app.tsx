import React from 'react';

import App from 'next/app';

function app({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
   
app.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  
  return { ...appProps }
}

export default app;