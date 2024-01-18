import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";

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
      <StandardGrid>
        <Intro></Intro>
        <Android></Android>
      </StandardGrid>
    </FullScreenSection>
  );

export default TechnologiesSection;
