import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Header, } from 'src/components/common';
import { ChallengeInfo, Histories } from 'src/components/challenge';
import { color } from 'src/components/styles/colors';
import { challengeList, histories } from 'src/dummyData';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function MyHistory() {
  const router = useRouter();
  const { id } = router.query;

  const challenge = challengeList.find(x => x.id === id);

  return (
    <>
      <Head>
        <title>My History: {challenge.title}</title>
      </Head> 
      <Header
        title="Verify"
        returnUrl={`/my-challenges`}
        background={color.background.layer1}
      />
      <Box pt={16} position="relative" display="flex" flexDirection="column" flex={1} background={color.background.layer1}>
        <ChallengeInfo {...challenge} depositsVisible p="12px 20px 28px 20px" bgColor={color.background.layer1} />
        <Box p="27px 20px 32px 20px" bg={color.white}>
          <Text fontWeight={800} fontSize="20px" lineHeight="25px">
            History
          </Text>
          <Text fontSize="14px" lineHeight="17px">
            {dayjs(challenge.startDate).format('MM/DD')}-{dayjs(challenge.endDate).format('MM/DD')}
          </Text>
          <Box
            mt="24px"
            position="relative"
            width="100%"
            pt={`${100 * 334 / 692}%`}
          >
            <Image alt="history" src="/images/history.png" fill/>
          </Box>
          <Text mt="40px" mb="18px" fontWeight={800} fontSize="20px" lineHeight="25px">
            My pictures
          </Text>
          <Histories histories={histories}/>
        </Box>
      </Box>
    </>
  );
}

