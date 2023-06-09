import { Box, Grid } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { BottomGnb, Header } from 'src/components/common';
import { Card, Gnb } from 'src/components/home';
import { color } from 'src/components/styles/colors';
import { challengeList } from 'src/dummyData';

export default function Challenges() {
  return (
    <>
      <Head>
        <title>Habit Hacker</title>
      </Head>
      <Header title="List" isHome />
      <Gnb/>
      <BottomGnb current="List" />
      <Box pt="124px" pb={8} bg={color.white} flex={1} overflowY="scroll" sx={{ '&::-webkit-scrollbar': { display: 'none' }}}>
        <Grid 
          p="15px 20px 90px 20px"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="32px 14px"
        >
          {challengeList.map((challenge, i) => (
            <Card key={`${challenge.id}-${i}`} {...challenge}/>
          ))}
        </Grid>
      </Box>
    </>
  );
};
