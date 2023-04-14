import { Box, Grid } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Header } from 'src/components/common';
import { Card } from 'src/components/home';
import { color } from 'src/components/styles/colors';
import { challengeList } from 'src/dummyData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenge</title>
      </Head>
      <Header title="List" isHome />
      <Box pt={16} bg={color.white} flex={1} overflowY="scroll" sx={{ '&::-webkit-scrollbar': { display: 'none' }}}>
        <Grid 
          p="15px 20px"
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
