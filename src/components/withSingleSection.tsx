import * as React from "react";
import { Flex, VStack, Box } from "@chakra-ui/react";
import { PageProps } from "../pages/MultiSectionPage";
import { getTextColor } from "./FullScreenSection";
import chroma from "chroma-js";

export interface SingleSectionProps {
  colorIndex: number,
  isVisible?: boolean
}

/**
 * HOC that wraps content in a vertical stack, makes it full screen, adds background color gradient and an `isVisible` prop 
 * @param WrappedComponent component to be selectively hidden
 * @returns null if `isVisible` is false
 */
export default function withSingleSection<P>(WrappedComponent: React.ComponentType<P>) {
  return (props: P & PageProps & SingleSectionProps) => {
    if (props.isVisible === false) {
      return null
    }
    else {
      const topColor  =  props.colorSet[props.colorIndex-1]
      const bottomColor  =  props.colorSet[props.colorIndex]
      const color = getTextColor(topColor, bottomColor)
      const topOpaque = chroma(topColor).alpha(0.9).hex()
      const bottomOpaque = chroma(bottomColor).alpha(0.9).hex()
      const colorGradient = 'linear(to-b, ' + topOpaque + ', ' + bottomOpaque + ')';
      return <Box bgSize={"cover"} bgRepeat={"no-repeat"} bgImage={props.fadedBackground} >
        <Flex         
          minWidth="99vw" height="100vh" minHeight="100vh" 
          justifyContent="center" 
          bgGradient={colorGradient}        
          color={color}        
          >
          <VStack height="100vh" width="75vw" justifyContent="center" overflow="hidden"  {...props}>
            <WrappedComponent {...props} />
          </VStack>        
        </Flex>
      </Box>
    }
  }
}

