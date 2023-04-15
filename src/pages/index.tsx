import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { color } from 'src/components/styles/colors';
import { useMetaMask } from 'src/hooks/useMetaMask';

export default function Splash() {
  const router = useRouter();
  const { isConnected } = useMetaMask();
  useEffect(() => {
    setTimeout(() => {
      let path = '/connect';
      if (isConnected) path = '/challenges';

      router.push(path);
    }, 1400);
  }, [isConnected]);
  return (
    <>
      <Head>
        <title>Habit Hacker</title>
      </Head>
      <Box w="100%" h="100vh" bg={color.primary} display="flex" alignItems="center" justifyContent="center">
        <Image alt="splash" src="/images/splash.svg" width={216} height={114} />
      </Box>
    </>
  );
};
