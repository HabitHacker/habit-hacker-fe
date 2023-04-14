import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'src/components/common';
import { color } from 'src/components/styles/colors';
import { useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function Connect() {
  const router = useRouter();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    onSuccess: () => {
      router.push('/challenges');
    },
  });

  const handleConnectWallet = () => connect();
  return (
    <>
      <Head>
        <title>Habit Hacker</title>
      </Head>
      <Box w="100%" h="100vh" display="flex" flexDirection="column">
        <Box 
          mt="auto"
          w="100%"
          p="58px 20px 34px 20px"
          position="relative"
          bg={color.background.layer1}
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
        >
          <Box
            position="absolute"
            width="50px"
            height="4px"
            top="14px"
            left="calc(50% - 25px)"
            bg="#D7DBE0"
            borderRadius="99px"
          />
          <Text
            fontWeight={700}
            fontSize="20px"
            lineHeight="1.5"
          >
            Challenge, Certify and Gain Coin
            Take hold This key 
          </Text>
          <Button
            onClick={handleConnectWallet}
            mt={28}
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
