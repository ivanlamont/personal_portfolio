import React from "react";
import {Text, Grid, GridItem, Image } from "@chakra-ui/react";
import withSingleSection from "./withSingleSection";
import { SpringIn } from "./SpringIn";

const bio1 = "I first got my hands on a computer back in the 20th century.  ";
const bio_brackets = " (Let's keep a little mystery in the story - I won't tell you exactly when... but suffice it to say, it was... a while ago).";
const bio2 = "I've been expanding my skills as a programmer ever since.  It's been a long and interesting journey so far!  I set up this site to showcase some of the things I've done, and highlight what I'm doing next.  If you're interested in me doing something for you, please do let me know, there's a contact form down below.";

const really_big_font = "50px"
const massive_font = "200px"
const blurb_font = "lg"

const LandingSectionGrid: React.FC = () => {
  return <Grid
      h='530px'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={2}
      color="white" 
    >
      <GridItem colSpan={1} >
        <SpringIn>
          <Text fontSize={really_big_font}>Hello, it's me...</Text>
        </SpringIn>
        <SpringIn>
          <Text as='b' fontSize={massive_font}>Ivan</Text>
          <Text as='b' fontSize={massive_font} color='tomato'>.</Text>
        </SpringIn>
      </GridItem>
      <GridItem rowSpan={3} colSpan={1}>    
        <Image src={require("../images/ivan_main.jpg")}  borderRadius='lg' >
        </Image>
      </GridItem>
      <GridItem colSpan={1}  >
        <Text fontSize={blurb_font}>{bio1}</Text>
        <Text as='i' fontSize={blurb_font}>{bio_brackets}</Text>
        <Text fontSize={blurb_font}>{bio2}</Text>
      </GridItem>
      <GridItem as='u' colSpan={1} color="GrayText" marginTop="55px" >
        <Text as='kbd' fontSize="20px">SCROLL FOR MORE</Text>        
      </GridItem>      
    </Grid>
};

const LandingSection = withSingleSection(LandingSectionGrid);
  
export default LandingSection;


