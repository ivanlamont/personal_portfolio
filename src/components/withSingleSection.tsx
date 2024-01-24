import * as React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { PageProps } from "../pages/MultiSectionPage";
import { getTextColor } from "./FullScreenSection";

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
      const colorGradient = 'linear(to-b, ' + topColor + ', ' + bottomColor + ')';
      const color = getTextColor(topColor, bottomColor)
      return <Flex         
        minWidth="99vw" height="100vh" minHeight="100vh" 
        justifyContent="center" 
        bgGradient={colorGradient} 
        color={color}        
        >
      <VStack height="100vh" width="70vw" justifyContent="center" overflow="hidden"  {...props}>
        <WrappedComponent {...props} />
      </VStack>        
      </Flex>
    }
  }
}

