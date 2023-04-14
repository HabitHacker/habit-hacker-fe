import { Box, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ExecutionType } from "src/types";
import { reduceHashString } from "src/utils";
import { color } from "../styles/colors";
import { Progress } from "./Executions.style";

interface Props {
  executions: Array<ExecutionType>;
  percentage?: number;
};

export default function Executions({
  executions,
  percentage=0,
}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let val = 0;
    setInterval(() => {
      if (val < percentage) {
        val += 1;
        setProgress(val);
      }
    }, 20);
  }, [percentage]);
  return (
    <Box mt="35px">
      <Text fontWeight={800} fontSize="20px" lineHeight="25px">
        Other participants
      </Text>
      <Text mt="20px" fontWeight={600} fontSize="17px" lineHeight="21px" color={color.text.secondary}>
        Today's success rate
      </Text>
      <Text mt="2px" mb="6px" fontWeight={500} fontSize="17px" lineHeight="21px" color={color.secondary}>
        {progress}%
      </Text>
      <Progress max="100" value={`${progress}`}/>
      <Grid mt="28px" gridTemplateColumns="repeat(3, 1fr)" gap="20px 10px">
        {executions.map((execution, i) => (
          <Box 
            key={`execution ${execution?.id}-${i}`}
            pt="100%" 
            position="relative"
            bgImage={`url(${execution?.imagePath})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            borderRadius="8px"
            overflow="hidden"
          >
            <Box 
              p="2px 8px 6px 8px"
              position="absolute"
              bottom="0"
              left="0"
              display="flex"
              alignItems="center"
              w="100%"
              bg="linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, rgba(31, 31, 31, 0.9) 25.46%)"
            >
              <Box position="relative" width="16px" height="16px" borderRadius="99px" overflow="hidden">
                <Image alt={`profile-${i}`} src="/images/dummy/dummy_nft.jpeg" fill sizes="100% auto" objectFit="cover"/>
              </Box>
              <Text ml="6px" color={color.background.layer2} fontWeight={500} fontSize="8px" lineHeight="10px">
                {reduceHashString(execution?.account, 7, 4)}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};