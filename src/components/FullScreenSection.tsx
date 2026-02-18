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
    w="100%"
    templateColumns={{ base: "1fr", lg: "repeat(2, minmax(0, 1fr))" }}
    gap={{ base: 4, md: 6 }}
    alignItems="start"
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
  const data = props as FullScreenSectionData
  const boxProps = props as StackProps
  return <VStack w="100%" alignItems="stretch" spacing={{ base: 4, md: 6 }} {...boxProps}>
            {data.children}
          </VStack>
}

export default FullScreenSection;
