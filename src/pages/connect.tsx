import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'src/components/common';
import { Intro } from 'src/components/connect';
import { color } from 'src/components/styles/colors';
import { useMetaMask } from 'src/hooks/useMetaMask';

export default function Connect() {
  const router = useRouter();
  const { connect } = useMetaMask();

  const handleConnectWallet = () => {
    connect(() => {
      router.push('/challenges');
    })
  };
  return (
    <>
      <Head>
        <title>Habit Hacker</title>
      </Head>
      <Box 
        w="100%" 
        h="100vh" 
        display="flex" 
        flexDirection="column" 
        bgImage="url(/images/background/bg-connect.png)" 
        bgPos="center" 
        bgRepeat="no-repeat" 
        bgSize="cover"
      >
        <Intro/>
        <Box 
          mt="auto"
          w="100%"
          p="52px 32px 34px 32px"
          position="relative"
          bg={color.white}
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
        >
          <Box
            position="absolute"
            width="50px"
            height="4px"
            top="19px"
            left="calc(50% - 25px)"
            bg="#D7DBE0"
            borderRadius="99px"
          />
          <Text
            fontWeight={500}
            fontSize="18px"
            lineHeight="25px"
          >
            Build healthy habits and achieve<br/>
            your goals with ease with Habit Hacker<br/> 
            and unlock your full potential for a happier,<br/>
            more fulfilling life.
          </Text>
          <Button
            onClick={handleConnectWallet}
            mt={6}
            p="16px 20px"
            borderRadius="21px"
            h="fit-content"
            fontWeight={700}
            fontSize="22px"
            lineHeight="27px"
          >
            Connect the wallet
          </Button>
          <Box mt="12px" mx="auto" w="fit-content">
            <Box 
              as="a" 
              href="/challenges"
              color={color.primary}
              h="fit-content"
              fontWeight="600"
              fontSize="17px"
              lineHeight="21px"
            >
              Skip
            </Box>
            <Box borderTop={`1.5px solid ${color.primary}`} borderRadius="99px" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
