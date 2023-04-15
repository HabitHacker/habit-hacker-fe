import React from "react";
import { Box, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { color } from "../styles/colors";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { ChallengeType } from "src/types";

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
  return (
    <GridItem onClick={() => router.push(`challenge/${id}`)}>
      <Box position="relative" borderRadius="9px" overflow="hidden">
        <Box position="relative" width="100%" pt="calc(100% * 142 / 168)">
          <Image alt={title} src={image} fill sizes="100% auto"/>
        </Box>
        <Box
          p="7px"
          position="absolute"
          bottom="0"
          bg="#000000A3"
          w="100%"
          color={color.white}
          textAlign="center"
        >
          <Text fontWeight={500}>
            {deposit} ETH
          </Text>
        </Box>
      </Box>
      <Text mt="14px" fontWeight={800} fontSize="19px" lineHeight="24px">
        {title}
      </Text>
      <Text 
        mt={2} 
        mb="auto"
        fontWeight={600} 
        fontSize="14px"
        lineHeight="17px" 
        color={color.secondary}
      >
        {dayjs(startDate).format('MM/DD')}-{dayjs(endDate).format('MM/DD')}
      </Text>
      <Box mt="12px" display="flex">
        {hashtags.map((hashtag, i) => (
          <Box 
            key={`${hashtag}-${i}`}
            mr="6px"
            p="4px 6px"
            bg={color.background.layer2}
            borderRadius="4px"
          >
            <Text
              fontWeight={600} 
              fontSize="14px"
              lineHeight="17px" 
            >
              {hashtag}
            </Text>
          </Box>
        ))}
      </Box>
      
    </GridItem>
  );
};