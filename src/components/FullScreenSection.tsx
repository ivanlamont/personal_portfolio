import * as React from "react";
import { Grid, StackProps, VStack } from "@chakra-ui/react";

export type FullScreenSectionData = {
  children: React.ReactNode, 
  isDarkBackground: boolean,
  backgroundTopColor: string, 
  backgroundBottomColor: string
}

export const StandardGrid = ({ children }: { children: React.ReactNode }) => (
  <Grid
    marginTop={100}
    h='530px'
    templateRows='repeat(3, 1fr)'
    templateColumns='repeat(2, 1fr)'
    gap={9}
  >
    {children}
  </Grid>
);

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
