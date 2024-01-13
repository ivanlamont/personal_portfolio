import * as React from "react";
import { StackProps, VStack } from "@chakra-ui/react";

export type FullScreenSectionData = {
  children: React.ReactNode, 
  isDarkBackground: boolean,
  backgroundTopColor: string, 
  backgroundBottomColor: string
}

const FullScreenSection = ( data: FullScreenSectionData, boxProps: StackProps ) => {
  const grad = 'linear(to-b, ' + data.backgroundTopColor + ', ' + data.backgroundBottomColor + ')';
  return (
    <VStack
      bgGradient={grad}
      color={data.isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {data.children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
