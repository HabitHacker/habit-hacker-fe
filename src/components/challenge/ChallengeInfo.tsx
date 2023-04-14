import { Box, BoxProps, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { ChallengeType } from "src/types";
import { color } from "../styles/colors";
import LinkIcon from 'public/icons/ico-link.svg';

export default function ChallengeInfo({
  id,
  deposit,
  title,
  image,
  startDate,
  endDate,
  hashtags,
  depositsVisible=false,
  ...rest
}: ChallengeType & BoxProps & { depositsVisible?: boolean }) {
  return (
    <Box display="flex" {...rest}>
      <Box position="relative" width="106px" height="106px" borderRadius="15px" overflow="hidden">
        <Image alt={title} src={image} fill sizes="100% auto" objectFit="cover" />
      </Box>
      <Box ml="21px">
        <Text as="h4" fontWeight={800} fontSize="20px" lineHeight="24px">
          {title}
        </Text>
        {depositsVisible && (
          <Box mt="8px" display="flex" alignItems="center">
            <LinkIcon />
            <Text ml="9px" fontWeight={800} fontSize="18px" lineHeight="1" color={color.text.secondary}>
              {deposit}
            </Text>
          </Box>
        )}
        <Text mt="8px" fontWeight={600} fontSize="17px" lineHeight="21px" color={color.text.tertiary}>
          # {hashtags.join(', ')}
        </Text>
        <Text mt="8px" fontWeight={600} fontSize="17px" lineHeight="21px" color={color.text.tertiary}>
          {dayjs(startDate).format('MM/DD')}-{dayjs(endDate).format('MM/DD')}
        </Text>
      </Box>
    </Box>
  );
};