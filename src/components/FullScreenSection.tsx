import * as React from "react";
import { Grid, StackProps, VStack } from "@chakra-ui/react";
import chroma from "chroma-js";
import { PageProps } from "../pages/MultiSectionPage";
import { SingleSectionProps } from "./withSingleSection";

export type FullScreenSectionData = {
  children?: React.ReactNode, 
  backgroundTopColor?: string, 
  backgroundBottomColor?: string
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

export function getTextColor( color1: string, color2: string ) {
  const c1 = chroma(color1);
  const c2 = chroma(color2);
  const mid = c1.mix(c2, 0.5, 'rgb');
  const contrast = chroma.contrast(mid, 'black');
  return contrast > 4.5 ? 'black' : 'white';
}

const FullScreenSection = ( props: PageProps | StackProps | SingleSectionProps ) => {
  const page = props as PageProps
  const section = props as SingleSectionProps
  const data = props as FullScreenSectionData
  const boxProps = props as StackProps
  const backgroundTopColor = page.colorSet[(section.colorIndex ?? 1 ) - 1]
  const backgroundBottomColor= page.colorSet[section.colorIndex ?? 1]
  const grad = 'linear(to-b, ' + backgroundTopColor + ', ' + backgroundBottomColor + ')';
  const textColor = getTextColor(backgroundTopColor, backgroundBottomColor)
  return  <VStack
      bgGradient={grad}
      color={textColor}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {data.children}
      </VStack>
    </VStack>
}

export default FullScreenSection;
