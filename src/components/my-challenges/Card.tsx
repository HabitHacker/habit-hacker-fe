import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { ChallengeType } from "src/types";
import { color } from "../styles/colors";
import LinkIcon from 'public/icons/ico-link.svg';
import ChevronIcon from 'public/icons/ico-chevron-right-secondary.svg';
import dayjs from "dayjs";
import Button from "../common/Button";
import { useRouter } from "next/router";

export default function Card({
  id,
  deposit,
  title,
  image,
  startDate,
  endDate,
  hashtags
}: ChallengeType) {
  const router = useRouter();
  const handleClickVerify = () => {
    router.push(`/challenge/${id}/verify`);
  };
  return (
    <Box position="relative" p="24px 18px 16px 20px" bg={color.white} borderRadius="10px" textAlign="right">
      <Decoration/>
      <Box display="flex" textAlign="left">
        <Box position="relative" width="60px" height="60px" borderRadius="15px" overflow="hidden">
          <Image alt={title} src={image} fill objectFit="cover" />
        </Box>
        <Box ml="12px">
          <Text as="h4" fontWeight={800} fontSize="20px" lineHeight="24px">
            {title}
          </Text>
          <Box mt="8px" display="flex" alignItems="center">
              <LinkIcon />
              <Text ml="9px" fontWeight={800} fontSize="18px" lineHeight="1" color={color.text.secondary}>
                {deposit}
              </Text>
            </Box>
          <Text mt="10px" fontWeight={600} lineHeight="20px" color={color.text.tertiary}>
            # {hashtags.join(', ')}
          </Text>
          <Text 
            mt="4px"
            mb="auto"
            fontWeight={600} 
            fontSize="14px"
            lineHeight="17px" 
            color={color.secondary}
          >
            {dayjs(startDate).format('MM/DD')}-{dayjs(endDate).format('MM/DD')}
          </Text>
        </Box>
      </Box>
      <Button
        onClick={handleClickVerify}
        mt="15px"
        padding="10px 16px"
        w="106px"
        fontWeight="700"
        borderRadius="99px"
      >
        Verify
      </Button>
    </Box>
  );
};

export const Decoration = () => (
  <Box 
    position="absolute" 
    top="0" 
    right="0" 
    width="50px" 
    height="60px" 
    display="flex"
    bg={color.background.layer2}
  >
    <Box 
      position="absolute" 
      top="0" 
      left="0"
      bg={color.white} 
      borderTopRightRadius="10px" 
      width="10px"
      height="100%" 
    />
    <Box 
      position="absolute" 
      bottom="0" 
      left="0"
      bg={color.white} 
      borderTopRightRadius="10px" 
      width="100%"
      height="10px" 
    />
    <Box 
      position="absolute" 
      bottom="0" 
      left="0"
      bg={color.white} 
      width="30px"
      height="30px" 
    />
    <Box 
      position="absolute" 
      top="0"
      right="0"
      pt="12px"
      pl="20px"
      bg={color.background.layer2} 
      width="40px"
      height="50px" 
      borderBottomLeftRadius="20px"
      textAlign="center"
    >
      <ChevronIcon />
    </Box>
  </Box>
);
