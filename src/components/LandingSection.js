import React from "react";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Ivan Lamont";
const bio1 = "I first got my hands on a computer back in the 20th century.  ";
const bio_brackets = " (Let's keep a little mystery in the story - I won't tell you exactly when... but suffice it to say, it was... a while ago).";
const bio2 = "I've been expanding my skills as a programmer ever since.  It's been a long and interesting journey so far!  I set up this site to showcase some of the things I've done, and highlight what I'm doing next.  If you're interested in me doing something for you, please do let me know, there's a contact form down below.";

const back_color = "#3765b6"
const really_big_font = "50px"
const massive_font = "200px"
const blurb_font = "lg"

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor={back_color}
  >

    <Grid
      h='530px'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={2}
    >
      <GridItem colSpan={1} bg={back_color}>
        <Text fontSize={really_big_font}>Hello, it's me...</Text>
        <Text as='b' fontSize={massive_font}>Ivan</Text>
        <Text as='b' fontSize={massive_font} color='tomato'>.</Text>
      </GridItem>
      <GridItem rowSpan={3} colSpan={1} bg={back_color}>    
        <Image src={require("../images/ivan_main.jpg")}>
        </Image>
      </GridItem>
      <GridItem colSpan={1} bg={back_color}>
        <Text fontSize={blurb_font}>{bio1}</Text>
        <Text as='i' fontSize={blurb_font}>{bio_brackets}</Text>
        <Text fontSize={blurb_font}>{bio2}</Text>
      </GridItem>
      <GridItem colSpan={1} as='kbd' fontSize="26px" bg={back_color}>SCROLL FOR MORE</GridItem>
      
    </Grid>


    {' '}

  </FullScreenSection>
);

export default LandingSection;
