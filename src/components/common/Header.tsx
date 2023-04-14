import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { accountState } from "src/recoil";
import HamburgerIcon from 'public/icons/ico-hamburger.svg';
import ChevronIcon from 'public/icons/ico-chevron-left.svg';
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "./Button";

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
  const account = useRecoilValue(accountState);
  return (
    <Box
      as="header"
      p="12px 20px"
      position="fixed"
      zIndex="1"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      w="100%"
      maxW="500px"
      display="flex"
      alignItems="center"
      bg={background}
    >
      <Box as="nav">
        {isHome ? 
          <HamburgerIcon/> : 
          <ChevronIcon 
            onClick={() => { 
              if (returnUrl === null) {
                router.back();
              } else {
                router.push(returnUrl);
              }
            }} 
          />
        }
      </Box>
      <Box as="nav" ml="12px">
        <Text fontWeight="700" fontSize="18px" lineHeight="22px">
          {title} 
        </Text>
      </Box>
      <Box as="nav" ml="auto">
        {account ? (
          <Box position="relative" borderRadius="99px" width="34px" height="34px">
            <Image
              alt="account-image"
              src=""
              fill
            />
          </Box>
        ) : (
          <Button
            onClick={() => {}}
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