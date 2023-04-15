import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../styles/colors";

const Icon = ({ isCurrent, type }) => {
  const currentColor = isCurrent ? color.primary : '#D6DADF';
  switch (type) {
    case 'List':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white"/>
        <path d="M28.6071 14.5119H31.2331C32.2878 14.5119 33.1429 15.3669 33.1429 16.4217V32.6548C33.1429 33.0557 32.9836 33.4403 32.7 33.7238C32.4165 34.0074 32.0319 34.1667 31.631 34.1667H16.5119C16.1109 34.1667 15.7264 34.0074 15.4428 33.7238C15.1593 33.4403 15 33.0557 15 32.6548V16.4217C15 15.3669 15.855 14.5119 16.9098 14.5119H19.5M28.6071 16.0238V14.9098C28.6071 13.855 27.7521 13 26.6974 13H21.4455C20.3907 13 19.5357 13.855 19.5357 14.9098V16.0238C19.5357 16.4248 19.695 16.8094 19.9785 17.0929C20.2621 17.3764 20.6466 17.5357 21.0476 17.5357H27.0952C27.4962 17.5357 27.8808 17.3764 28.1643 17.0929C28.4479 16.8094 28.6071 16.4248 28.6071 16.0238Z" stroke={currentColor} strokeWidth="1.5119"/>
        <path d="M16 14.5H19H19.5V16L20.5 17.5L26 18C26.6667 17.8333 28.1 17.4 28.5 17C28.9 16.6 28.6667 15.1667 28.5 14.5H31C32.6 14.5 33 15.5 33 16V32C33 33.2 32.3333 33.8333 32 34H30.5H16.5C15.7 34 15.1667 33 15 32.5V16.5L16 14.5Z" fill={currentColor}/>
        </svg> 
      );  
    case 'Habits':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white"/>
        <circle cx="28.2406" cy="20.6193" r="8.61934" fill="#D6DADF"/>
        <circle cx="28.2406" cy="20.6194" r="5.60257" fill="white"/>
        <rect x="23.8207" y="25.3062" width="3.2003" height="15.5492" rx="1.60015" transform="rotate(35.2903 23.8207 25.3062)" fill={currentColor}/>
        <rect x="19.15" y="37.6088" width="2.97779" height="9.01034" rx="1.48889" transform="rotate(126.582 19.15 37.6088)" fill={currentColor}/>
        <rect x="22.3387" y="32.8846" width="2.97779" height="9.01034" rx="1.48889" transform="rotate(126.582 22.3387 32.8846)" fill={currentColor}/>
        </svg>
      );
    case 'Mypage':
      return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white"/>
        <path d="M32.2623 34.178V35C32.7163 35 33.0843 34.632 33.0843 34.178H32.2623ZM15.822 34.178H15C15 34.632 15.368 35 15.822 35V34.178ZM28.1523 17.7508C28.152 18.2903 28.0456 18.8246 27.8389 19.3229C27.6322 19.8213 27.3294 20.2741 26.9478 20.6554C26.5661 21.0368 26.1131 21.3392 25.6145 21.5455C25.116 21.7518 24.5817 21.8578 24.0422 21.8576V23.5016C27.2201 23.5016 29.7963 20.9271 29.7963 17.7508H28.1523ZM24.0422 21.8576C23.5026 21.8578 22.9684 21.7518 22.4698 21.5455C21.9713 21.3392 21.5182 21.0368 21.1366 20.6554C20.7549 20.2741 20.4521 19.8213 20.2455 19.3229C20.0388 18.8246 19.9323 18.2903 19.9321 17.7508H18.2881C18.2883 18.5062 18.4373 19.2542 18.7266 19.9521C19.0159 20.6499 19.4398 21.2839 19.9741 21.8179C20.5084 22.352 21.1427 22.7755 21.8407 23.0644C22.5387 23.3533 23.2867 23.5019 24.0422 23.5016V21.8576ZM19.9321 17.7508C19.9323 17.2113 20.0388 16.6771 20.2455 16.1787C20.4521 15.6803 20.7549 15.2276 21.1366 14.8462C21.5182 14.4649 21.9713 14.1624 22.4698 13.9561C22.9684 13.7499 23.5026 13.6438 24.0422 13.644V12C23.2867 11.9998 22.5387 12.1484 21.8407 12.4373C21.1427 12.7261 20.5084 13.1497 19.9741 13.6837C19.4398 14.2177 19.0159 14.8517 18.7266 15.5496C18.4373 16.2474 18.2883 16.9954 18.2881 17.7508H19.9321ZM24.0422 13.644C25.1317 13.644 26.1766 14.0766 26.9473 14.8467C27.718 15.6168 28.1514 16.6613 28.1523 17.7508H29.7963C29.7961 16.9954 29.6471 16.2474 29.3578 15.5496C29.0685 14.8517 28.6446 14.2177 28.1103 13.6837C27.5759 13.1497 26.9417 12.7261 26.2437 12.4373C25.5457 12.1484 24.7976 11.9998 24.0422 12V13.644ZM32.2623 33.356H15.822V35H32.2623V33.356ZM16.644 34.178V30.8981H15V34.178H16.644ZM20.7541 26.7864H27.3302V25.1424H20.7541V26.7864ZM31.4403 30.8965V34.178H33.0843V30.8965H31.4403ZM27.3302 26.7864C28.4203 26.7864 29.4657 27.2194 30.2365 27.9902C31.0073 28.761 31.4403 29.8064 31.4403 30.8965H33.0843C33.0843 29.3704 32.4781 27.9068 31.399 26.8277C30.3199 25.7486 28.8563 25.1424 27.3302 25.1424V26.7864ZM16.644 30.8981C16.644 29.8081 17.0771 28.761 17.8478 27.9902C18.6186 27.2194 19.6641 26.7864 20.7541 26.7864V25.1424C19.228 25.1424 17.7644 25.7486 16.6853 26.8277C15.6062 27.9068 15 29.3721 15 30.8981H16.644Z" fill={currentColor}/>
        <circle cx="24.0422" cy="17.8508" r="4.78703" fill={currentColor}/>
        <path d="M16.0638 29.5524V33.2757V33.8076L23.5103 34.3395L32.5525 33.8076C32.3752 32.9211 32.0206 30.829 32.0206 29.5524C32.0206 28.2759 30.2476 26.893 29.3612 26.3611H20.319C18.1914 26.3611 16.5957 28.4887 16.0638 29.5524Z" fill={currentColor}/>
        </svg>
      );
  };
};

export default function BottomGnb({ current }) {
  const router = useRouter();
  return (
    <Box
      zIndex={2} 
      pb="20px"
      position="fixed" 
      top="100vh" 
      transform="translate(0, -100%)" 
      px="20px" 
      display="flex" 
      justifyContent="center"
      w="min(100vw, 500px)"
      bg={color.white}
      boxShadow="0px 0px 18px rgba(0, 0, 0, 0.1)"
      borderTop={`1px solid ${color.background.layer1}`}
    >
      {['List', 'Habits', 'Mypage'].map(x => (
        <Box
          key={x}
          mx="auto"
          px="33px"
          cursor="pointer"
          textAlign="center"
          onClick={() => {
            switch (x) {
              case 'List': router.push('/challenges');
              case 'List': router.push('/my-challenges');
              case 'List': router.push('/mypage');
            }
          }}
        >
          <Icon isCurrent={current === x} type={x}/>
          <Text
            mt="2px"
            fontWeight={700}
            fontSize="14px"
            lineHeight="14px"
          >
            {x}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
