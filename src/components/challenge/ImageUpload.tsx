import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ImageUploadStatus } from 'src/types';
import { Loading, Button } from '../common';
import { color } from '../styles/colors';

interface Props {
  timeLeft: number;
  onSubmit: (file: File) => void;
  image: string | null;
};

export default function ImageUpload({ timeLeft, onSubmit, image }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [time, setTime] = useState(timeLeft);
  const [status, setStatus] = useState<ImageUploadStatus>('none');

  const handleClickUpload = () => {
    if (ref && ref.current) {
      ref.current.click();
    }
  };
  const handleChangeFile = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e && e.target && e.target.files) {
      onSubmit(e.target.files[0]);
    }
  };

  useEffect(() => {
    let val = timeLeft;
    setInterval(() => {
      if (val > 0) {
        val -= 1000;
        setTime(val);
      }
    }, 1000);
  }, []);

  const Status = () => {
    switch (status) {
      case 'pending': return <Text mt="6px" fontWeight={500} lineHeight="20px" color={color.pending}>
        💬  Pending
      </Text>;
      case 'rejected': return <Text mt="6px" fontWeight={500} lineHeight="20px" color={color.warning}>
        ❌  Reject
      </Text>;
      case 'success': return <Text mt="6px" fontWeight={500} lineHeight="20px" color={color.primary}>
        🎉  Success
      </Text>;
      default: return <Text mt="6px" fontWeight={500} lineHeight="20px" color={color.text.tertiary}>
        {dayjs(time).format('HH:mm:ss')} left
      </Text>;
    };
  };

  return (
    <>
    <Loading isLoading={false} />
    <Box mt="22px" display="flex">
      <Box 
        ref={ref} 
        as="input" 
        type="file" 
        accept='image/jpeg, image/png, image/jpg'
        onChange={handleChangeFile}
        display="none"
      />
      <Box position="relative" w="128px" h="128px" borderRadius="12px">
        <Image
          alt="upload-image"
          src={image || '/images/default_img.png'}
          fill
          objectFit='cover'
        />
      </Box>
      <Box ml="24px" display="flex" flexDirection="column" h="inherit">
        <Text 
          fontWeight={500} 
          fontSize="20px" 
          lineHeight="25px" 
          {...status==='rejected' && { color: color.warning }}
        >
          Please {status==='rejected' ? "reupload" : "upload"} a picture
        </Text>
        <Status/>
        <Button
          onClick={handleClickUpload}
          mt="auto"
          padding="10px 20px"
          fontWeight="600"
          fontSize="17px"
          w="92px"
          h="35px"
        >
          Upload 
        </Button>
      </Box>
    </Box>
    </>
  );
};