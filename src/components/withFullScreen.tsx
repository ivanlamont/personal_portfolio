import * as React from "react";
import { Flex, VStack } from "@chakra-ui/react";

interface FullScreenProps {
  isDarkBackground?: boolean,
  colors: string[],
  colorIndex: number,
  isVisible?: boolean
}

/**
 * HOC that wraps content in a vertical stack, makes it full screen, adds background color gradient and an `isVisible` prop 
 * @param WrappedComponent component to be selectively hidden
 * @returns null if `isVisible` is false
 */
export default function withFullScreen<P>(WrappedComponent: React.ComponentType<P>) {
  return (props: P & FullScreenProps) => {
    if (props.isVisible === false) {
      return null
    }
    else {
      const colorGradient = 'linear(to-b, ' + props.colors[props.colorIndex-1] + ', ' + props.colors[props.colorIndex] + ')';
      const { isDarkBackground, colors, colorIndex, isVisible,  ...childProperties } = props;
      return <Flex         
        minWidth="99vw" height="100vh" minHeight="100vh" 
        justifyContent="center" 
        bgGradient={colorGradient} color={(props.isDarkBackground ?? true) ? "white" : "black"}
        
        >
      <VStack height="100vh" width="70vw" justifyContent="center" overflow="hidden"  {...childProperties}>
        <WrappedComponent {...props} />
      </VStack>        
      </Flex>
    }
  }
}

