import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from 'src/components/common';
import { ChallengeInfo, Executions, ImageUpload } from 'src/components/challenge';
import { color } from 'src/components/styles/colors';
import { challengeList, executions } from 'src/dummyData';

export default function Verify() {
  const router = useRouter();
  const { id } = router.query;
  const [image, setImage] = useState(null);

  const challenge = challengeList.find(x => x.id === id);

  const onSubmit = (file:File) => { console.log(file); };
  return (
    <>
      <Head>
        <title>Verify: {challenge.title}</title>
      </Head> 
      <Header
        title="Verify"
        returnUrl={`/my-challenges`}
        background={color.background.layer1}
      />
      <Box pt={16} position="relative" display="flex" flexDirection="column" flex={1} background={color.background.layer1}>
        <ChallengeInfo {...challenge} depositsVisible p="12px 20px 28px 20px" />
        <Box p="27px 20px 32px 20px" bg={color.white}>
          <Box>
            <Text fontWeight={800} fontSize="20px" lineHeight="25px">
              Mine
            </Text>
            <ImageUpload timeLeft={challenge.timeLeft} onSubmit={onSubmit} image={image} />
            <Box mt="43px" width="100%" h="3px" borderRadius="99px" bg={color.background.layer1}/>
          </Box>
          <Executions
            executions={executions}
            percentage={23}
          />
        </Box>
      </Box>
    </>
  );
}