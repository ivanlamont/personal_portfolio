import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Ivan Lamont";
const bio1 = "Accomplished & highly versatile full stack systems designer, developer & team lead, with many years’ experience in financial services and payments.  Proven ability to take charge of project development from concept to production.  Motivated, enthusiastic & experienced leader in development teams, mentoring the newer members and collaborating effectively with the experienced.  Key ability to see the big picture, identify optimum design goals, ultimately delivering the most efficient & reliable solutions for end user.  Self-starter & problem solver, equally at home on server side or client interface coding platforms.  ";
const bio2 = "";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      size='2xl'
      name='Ivan J. Lamont'
      src={require("../images/self_small.jpg")}
    />
    <Text fontSize='sm'>{greeting}</Text>
    <Text as='b' fontSize='2xl'>{bio1}</Text>
    <Text as='b' fontSize='2xl'>{bio2}</Text>
    {' '}

  </FullScreenSection>
);

export default LandingSection;
