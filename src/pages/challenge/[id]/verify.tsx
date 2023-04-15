import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header, Loading } from 'src/components/common';
import { ChallengeInfo, Executions, ImageUpload } from 'src/components/challenge';
import { color } from 'src/components/styles/colors';
import { challengeList } from 'src/dummyData';
import uploadImage from 'src/utils/uploadImage';
import { PrismaClient } from '@prisma/client';
import { useMetaMask } from 'src/hooks/useMetaMask';

export default function Verify({ executions }) {
  const router = useRouter();
  const { id } = router.query;
  const [execution, setExecution] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { account } = useMetaMask();

  const challenge = challengeList.find(x => x.id === id);

  const onSubmit = async (file:File) => { 
    if (file) {
      setIsLoading(true);
      const img = await uploadImage(file);
      await fetch(
        '/api/execution',
        {
          method: 'POST',
          body: JSON.stringify({
            imagePath: img,
            imageName: file.name,
            account: account,
            challengeId: id,
            count: 0,
            status: 'pending'
          })
        }
      ).then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response.status;
      }).then(function (response) {
        const data = response.body.data;
        setIsLoading(false);
        setExecution(data);
      }).catch(function (error) {
        console.warn(error);
      });
    }
  };
  return (
    <>
      <Head>
        <title>Verify: {challenge.title}</title>
      </Head> 
      <Loading isLoading={isLoading} />
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
            <ImageUpload timeLeft={challenge.timeLeft} onSubmit={onSubmit} execution={execution} />
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

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const executions = await prisma.execution.findMany();

  return ({
    props: { executions },
  });
};
