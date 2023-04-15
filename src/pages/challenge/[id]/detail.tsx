import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Header, Button } from "src/components/common";
import { color } from "src/components/styles/colors";
import { challengeList } from "src/dummyData";
import EtherIcon from 'public/icons/ico-eth.svg';
import ParticipantIcon from 'public/icons/ico-participant.svg';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const challenge = challengeList.find(x => x.id === id);

  return (
    <>
      <Head>
        <title>Challenge: {challenge.title}</title>
      </Head>
      <Header
        title="Details"
        returnUrl={`/challenges/${id}`}
      />
      <Box mt={16} position="relative" display="flex" flexDirection="column" flex={1} bg={color.white}>
        <Box 
          p="16px 20px"
          w="100%"
          height="288px"
          display="flex"
          flexDirection="column"
          backgroundImage={`linear-gradient(transparent 1.09%, ${challenge.background} 100%), url(${challenge.image})`}
          backgroundSize="cover"
          backgroundPosition="top center"
        >
          <Box mt="auto" display="flex" alignItems="center">
            <Image alt="organizer" src={challenge.organizer.image} width={36} height={36} style={{ borderRadius: '99px' }}/>
            <Text ml="8px" fontWeight={600} fontSize="18px" color={color.white}>
              {challenge.organizer.name}
            </Text>
          </Box>
          <Text as="h4" mt="14px" fontWeight={800} fontSize="26px" lineHeight="32px" color={color.white}>
            {challenge.title}
          </Text>
          <Text mt="4px" fontWeight={500} color={color.text.tertiary} sx={{ '& span': { color: color.secondary } }}>
            Start on {dayjs(challenge.startDate).format('MMMM DD, YYYY')}
          </Text>
        </Box>
        <Box 
          p="20px" 
          display="flex"
          flexDirection="column"
          flex={1} 
        >
          <Text fontSize="17px" lineHeight="23.5px">
            {challenge.description}
          </Text>
          <Text
            mt="36px"
            fontWeight={800}
            fontSize="20px"
            lineHeight="25px"
            color={color.primary}
          >
            You can get this NFT
          </Text>
          <Box mb="40px">
            {challenge.nfts.map((nft, i) => (
              <Box
                key={`challenge-${i}`}
                mt="20px"
                display="flex"
                alignItems="center"
              >
                <Image alt={nft.title} src={nft.image} width={120} height={120} style={{ borderRadius: '8px' }}/>
                <Box ml="15px">
                  <Text fontWeight={800} fontSize="18px" lineHeight="22px">
                    {nft.title}
                  </Text>
                  <Text mt="7px" fontWeight={500}>
                    {nft.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
          <Button
            onClick={() => router.push(`/challenge/${id}/participate`)}
            mt="auto" 
            padding="16px 20px"
            h="fit-content"
            fontWeight="800"
            fontSize="24px"
            lineHeight="30px"
            borderRadius="21px"
          >
            JOIN
          </Button>
        </Box>
      </Box>
    </>
  );
};