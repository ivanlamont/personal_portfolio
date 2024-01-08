//import React, { useEffect, useRef } from "react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { icon } from "@fortawesome/fontawesome-svg-core";

const socials = [
  {
    id: 0,
    icon: faEnvelope,
    url: "mailto: ivanlamont@yahoo.com",
  },
  {
    id: 1,
    icon: faGithub,
    url: "https://github.com/ivanlamont",
  },
  {
    id: 2,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ivan-lamont-18736a8/",
  },
  {
    id: 3,
    icon: faChessPawn,
    url: "https://www.chess.com/member/ivanlamont/",
  },  
  {
    id: 4,
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/1888629/ivan-l",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {
                socials.map(function(s, index) {return <a key={index} href={s.url}><FontAwesomeIcon icon={s.icon} size="2x" /></a>})
              }              
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='/#projects' key="projects" onClick={handleClick('projects')}>Expertise</a>
              <a href='/#contact-me' key="contact" onClick={handleClick('contactme')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
