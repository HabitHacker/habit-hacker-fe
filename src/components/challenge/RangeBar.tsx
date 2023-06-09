import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "../styles/colors";

export default function RangeBar({
  min,
  max,
  avg
}) {
  return (
    <Box>
      <Box 
        width="100%" 
        height="11px"
        borderRadius="99px"
        bg={color.background.layer2}
      >
        <Box
          ml="25%"
          width="53px"
          height="inherit"
          borderRadius="99px"
          bg={color.main.lighter}
          display="flex"
          justifyContent="center"
        >
          <Box
            width="24px"
            height="inherit"
            borderRadius="99px"
            bg={color.main.light}
          />
        </Box>
      </Box>
      <Box mt="8px" position="relative" display="flex">
        <Box>
          <Text fontWeight={500}>Min</Text>
          <Text 
            mt="6px"
            color={color.primary}
            fontSize="14px"
            lineHeight="17px"
          >
            {min}ETH
          </Text>
        </Box>
        <Box ml="auto" textAlign="right">
          <Text fontWeight={500}>Max</Text>
          <Text 
            mt="6px"
            color={color.primary}
            fontSize="14px"
            lineHeight="17px"
          >
            {max}ETH
          </Text>
        </Box>
      </Box>
    </Box>
  );
};