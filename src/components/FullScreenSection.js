import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, backgroundTopColor, backgroundBottomColor, ...boxProps }) => {
  const grad = 'linear(to-b, ' + backgroundTopColor + ', ' + backgroundBottomColor + ')';
  return (
    <VStack
      bgGradient={grad}
      //bgGradient='linear(to-b, #395caa, #3765b6)'
      //backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
