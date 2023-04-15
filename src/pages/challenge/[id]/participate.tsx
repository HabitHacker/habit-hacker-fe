import { Box, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { ChallengeInfo, RangeBar } from 'src/components/challenge';
import { Button, Header } from 'src/components/common';
import { color } from 'src/components/styles/colors';
import { challengeList } from 'src/dummyData';

export default function Participate() {
  const inputRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;

  const challenge = challengeList.find(x => x.id === id);

  const handleClickJoin = () => {
    router.push('/my-challenges');
  };
  return (
    <>
      <Head>
        <title>Challenge: {challenge.title}</title>
      </Head> 
      <Header
        title="Participating"
        returnUrl={`/challenge/${id}`}
      />
      <Box mt={16} position="relative" display="flex" flexDirection="column" flex={1} bg={color.background.layer1}>
        <Box p="28px 20px" bg={color.white}>
          <ChallengeInfo {...challenge}/>
          <Text mt="31px" fontWeight={700} fontSize="24px" lineHeight="30px">
            Deposits
          </Text>
          <Text mt="8px" mb="30px" fontWeight={500} lineHeight="20px" color={color.text.tertiary}>
            If you bet before we start,<br/>
            we'll give you back after we finish!
          </Text>
          <RangeBar
            min={challenge.minDeposits}
            max={challenge.maxDeposits}
            avg={challenge.average}
          />
          <InputGroup mt="30px">
            <Input
              type="number"
              ref={inputRef}
              h="70px"
              focusBorderColor={color.primary}
              fontWeight={800}
              fontSize="40px"
              borderRadius="14px"
              border="none"
              bg={color.background.layer1}
              color={color.primary}
              sx={{
                '&:focus': {
                  border: 'none'
                }
              }}
            />
            <InputRightElement 
              right="20px"
              height="100%" 
              children={<Text fontWeight={500} fontSize="20px">ETH</Text>} />
          </InputGroup>
        </Box>
        <Box p="20px 20px" fontWeight={500} lineHeight="20px" flex={1}>
          <Text
            fontWeight={800}
            fontSize="20px"
            lineHeight="25px"
          >
            You can get this NFT
          </Text>
          <Box mt="14px" mb="28px" display="flex">
            {challenge.nfts.map((nft, i) => (
              <Image 
                key={nft.title}
                alt={nft.title} 
                src={nft.image} 
                width={90} 
                height={90} 
                style={{ borderRadius: '8px', marginRight: '8px', height: 'fit-content' }}
              />
            ))}
          </Box>
          <Text>If you succeed 100%, you get back as much as a (Betting amount for failed users)*(Betted amount/Total Betting Amount).</Text>
          <Text mt="8px">If you succeed 85%, you'll get back as much as you bet.</Text>
          <Text mt="8px">If you succeed less than 85%, you'll get 50 percent of your bet back.</Text>
          <Text
            mt="19px"
            color={color.text.tertiary}
          >
            If everyone succeeds,<br/>there is no return
          </Text>
        </Box>
        <Box mt="auto" px="20px" pb="30px">
          <Button
            onClick={handleClickJoin}
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
