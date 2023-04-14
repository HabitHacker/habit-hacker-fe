import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Header } from 'src/components/common';
import { Card } from 'src/components/my-challenges';
import { challengeList } from 'src/dummyData';

export default function MyChallenges() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Participating Challenges</title>
      </Head> 
      <Header
        title="Verify"
        returnUrl={null}
      />
      <Box mt={16} p="30px 20px" display="grid" gap="20px">
        {challengeList.map(challenge => (
          <Card
            key={challenge.id}
            {...challenge}
          />
        ))}
      </Box>
    </>
  );
};