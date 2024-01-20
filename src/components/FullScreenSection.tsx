import * as React from "react";
import { Grid, StackProps, VStack } from "@chakra-ui/react";
import chroma from "chroma-js";

export type FullScreenSectionData = {
  children: React.ReactNode, 
  isDarkBackground?: boolean,
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

function getTextColor( color1: string, color2: string ) {
  const c1 = chroma(color1);
  const c2 = chroma(color2);
  const mid = c1.mix(c2, 0.5, 'rgb');
  const contrast = chroma.contrast(mid, 'black');
  return contrast > 4.5 ? 'black' : 'white';
}

const FullScreenSection = ( data: FullScreenSectionData, boxProps: StackProps ) => {
  const grad = 'linear(to-b, ' + data.backgroundTopColor + ', ' + data.backgroundBottomColor + ')';
  const textColor = getTextColor(data.backgroundTopColor, data.backgroundBottomColor)
  return (
    <VStack
      bgGradient={grad}
      color={textColor}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {data.children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
