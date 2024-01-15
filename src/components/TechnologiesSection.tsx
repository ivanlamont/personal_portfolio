import YouTube from "react-youtube";
import FullScreenSection from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
    <Box>
      <Heading as={heading_type} size={heading_size}>Technology Experience</Heading>
      <Text>I have used a TON of different Technologies over the course of my career.  Here's a summary!</Text>
    </Box>
  );

const Android: React.FC = () => (
<Box>
    <Heading as={heading_type} size={heading_size}>Android</Heading>
    <Text></Text>
</Box>
);
       

const TechnologiesSection = (props: { colors: string[]; colorIndex: number; }) => (
    <FullScreenSection
      isDarkBackground
      backgroundTopColor={props.colors[props.colorIndex-1]}
      backgroundBottomColor={props.colors[props.colorIndex]}
    >  
      <Grid
        marginTop={100}
        h='530px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={2}
      >
        <Intro></Intro>
        <Android></Android>
      </Grid>
    </FullScreenSection>
  );

export default TechnologiesSection;
