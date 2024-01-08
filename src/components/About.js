import React from "react";
import { Avatar, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const back_color = "#14532d"

const About = () => {
    return (
      <FullScreenSection
        backgroundColor={back_color}
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Avatar
          size='2xl'
          name='Ivan J. Lamont'
          src={require("../images/self_small.jpg")}
        />
      </FullScreenSection>
    );
  };
  
  export default About;