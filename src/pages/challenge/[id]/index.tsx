import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Header } from "src/components/common";
import { color } from "src/components/styles/colors";
import { challengeList } from "src/dummyData";
import LinkIcon from 'public/icons/ico-link.svg';
import ParticipantIcon from 'public/icons/ico-participant.svg';
import Button from "src/components/common/Button";

export default function Challenge() {
  const router = useRouter();
  const { id } = router.query;

  const challenge = challengeList.find(x => x.id === id);

  return (
    <>
      <Head>
        <title>Challenge: {challenge.title}</title>
      </Head>
      <Header
        title="Participating"
        returnUrl="/"
      />
      <Box mt={16} position="relative" display="flex" flexDirection="column" flex={1} bg={color.background.layer3}>
        <Box 
          position="absolute"
          top="0"
          pt="100%" 
          w="100%"
          backgroundImage={`linear-gradient(transparent 60%, ${color.background.layer3} 100%), url(${challenge.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <Box position="relative" zIndex={1} mt="min(50%, 150px)" w="100%" px="20px">
          <Box display="flex" alignItems="center">
            {challenge.hashtags.map((hashtag, i) => (
              <Box 
                key={`${hashtag}-${i}`}
                mr="12px"
                p="11px 16px"
                bg="rgba(140, 140, 140, 0.43)"
                border="1.5px solid #fff"
                borderRadius="99px"
              >
                <Text fontWeight="600" fontSize="14px" lineHeight="17px" color={color.white}>
                  # {hashtag}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box mt="10px" mx="20px" bg="linear-gradient(transparent 90%, #fff 90%)" borderRadius="10%">
          <Box position="relative" pt="calc(100% * 324 / 350)">
            <Box
              pt="calc(100% * 324 / 350)"
              position="absolute"
              zIndex={1}
              top="0"
              width="100%"
            >
              <Image
                alt="info card"
                src="/images/bg_info_card.png"
                fill
              />
            </Box>
            <Box position="absolute" top="0" zIndex="1" p="min(36px, 9%) min(30px, 7.5%)">
              <Text
                fontWeight={500}
                color={color.text.tertiary}
                sx={{ '& span': { color: color.secondary } }}
              >
                Start on <span>{challenge.startDate.toLocaleString('en', { month: 'long' })} {dayjs(challenge.startDate).format('DD,YYYY')}</span>
              </Text>
              <Text 
                as="h4"
                mt="10px"
                fontWeight={800}
                fontSize="26px"
                lineHeight="32px"
              >
                {challenge.title}
              </Text>
              <Text mt="24px" fontWeight={500} fontSize="17px" lineHeight="21px" color={color.text.tertiary}>
                Deposits
              </Text>
              <Box mt="16px" display="flex" alignItems="center">
                <LinkIcon />
                <Text ml="9px" fontWeight={800} fontSize="22px" lineHeight="1" color={color.text.secondary}>
                  {challenge.deposit}
                </Text>
              </Box>
              <Text mt="20px" fontWeight={500} fontSize="17px" lineHeight="21px" color={color.text.tertiary}>
                Number of participants
              </Text>
              <Box mt="16px" display="flex" alignItems="center">
                <ParticipantIcon />
                <Text ml="12px" fontWeight={800} fontSize="22px" lineHeight="1" color={color.text.secondary}>
                  {challenge.participants}/{challenge.limit}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt="auto" p="24px 20px 48px 20px" flex={1} textAlign="center">
          <Button
            onClick={() => {}}
            marginBottom="10px"
            padding="16px 20px"
            h="fit-content"
            fontWeight="800"
            fontSize="24px"
            lineHeight="30px"
            borderRadius="21px"
          >
            JOIN
          </Button>
          <Box 
            as="a" 
            color={color.primary}
            fontWeight="600"
            fontSize="17px"
            lineHeight="21px"
            borderBottom={`2px solid ${color.primary}`}
          >
            Read More
          </Box>
        </Box>
      </Box>
    </>
  );
};