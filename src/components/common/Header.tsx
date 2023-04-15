import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ChevronIcon from 'public/icons/ico-chevron-left.svg';
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "./Button";
import MetaMaskSDK from '@metamask/sdk';
import { useMetaMask } from "src/hooks/useMetaMask";

interface Props {
  title: string;
  isHome?: boolean;
  returnUrl?: string | null;
  background?: string;
};

export default function Header({
  title,
  isHome=false,
  returnUrl,
  background="#fff"
}: Props) {
  const router = useRouter();
  const { isConnected, connect } = useMetaMask();

  const handleConnectWallet = () => {
    connect();
  };
  return (
    <Box
      as="header"
      p="12px 20px"
      position="fixed"
      zIndex={2}
      top="0"
      left="50%"
      transform="translateX(-50%)"
      w="100%"
      maxW="500px"
      h="64px"
      display="flex"
      alignItems="center"
      bg={background}
    >
      {isHome ? (
        <Box as="nav">
          <Image
            alt="habit hacker"
            src="/images/img-logo.svg"
            width={140}
            height={24}
          />
        </Box>
      ) : (
        <>
          <Box as="nav">
            <ChevronIcon 
              onClick={() => { 
                if (returnUrl === null) {
                  router.back();
                } else {
                  router.push(returnUrl);
                }
              }} 
            />
          </Box>
          <Box as="nav" ml="12px">
            <Text fontWeight="700" fontSize="18px" lineHeight="22px">
              {title} 
            </Text>
          </Box>
        </>
      )}
      <Box as="nav" ml="auto">
        {isConnected ? (
          <Box 
            as="button" 
            type="button"
            onClick={() => router.push('/mypage')}
            position="relative" 
            borderRadius="99px" 
            width="36px" 
            height="36px"
            overflow="hidden"
          >
            <Image alt="account-image" src="/images/dummy/dummy_nft.jpeg" fill sizes="100% auto" objectFit="cover" />
          </Box>
        ) : (
          <Button
            onClick={handleConnectWallet}
            padding="9px 20px"
            fontWeight="600"
          >
            Connect
          </Button>
        )}
      </Box>
    </Box>
  );
};
