import FullScreenSection from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const back_top_color = "#1a57c9"
const back_bottom_color = "#6795c9"
const really_big_font = "50px"

const TradingSection = (props) => (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundTopColor={props.colors[props.colorIndex-1]}
      backgroundBottomColor={props.colors[props.colorIndex]}
    >  
      <Grid
        h='530px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={2}
      >
        <GridItem colSpan={1} >
          <Text fontSize={really_big_font}>TradingSection</Text>
        </GridItem>        
      </Grid>
    </FullScreenSection>
  );
  
  export default TradingSection;
  