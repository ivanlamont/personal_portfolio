import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChessKing, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Social = {
  id: number;
  icon: IconProp;
  url: string;
};

const socials: Social[] = [
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
    icon: faChessKing,
    url: "https://www.chess.com/member/ivanlamont/",
  },  
  // {
  //   id: 4,
  //   icon: faYoutube,
  //   url: "https://www.youtube.com/channel/UCa358WYu6UT7h09YhxAyx6A",
  // },  

];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = (anchor: string) => () => {
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
      zIndex={1000}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, sm: 6, md: 8, lg: 10 }}
          py={{ base: 3, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={{ base: 4, md: 6 }}>
              {
                socials.map(function(s, index) {return <a key={index} href={s.url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={s.icon} size="lg" /></a>})
              }              
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Link href="/" key="home" onClick={handleClick('home')}>Home</Link>
              <Link href="/#projects" key="projects" onClick={handleClick('projects')}>Portfolio</Link>
              <Link href="/#contact-me" key="contact" onClick={handleClick('contactme')}>Contact Me</Link>
            </HStack>
            <IconButton
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              icon={<FontAwesomeIcon icon={isOpen ? faXmark : faBars} />}
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
              display={{ base: "inline-flex", md: "none" }}
              onClick={onToggle}
            />
          </nav>
        </HStack>
        {isOpen ? (
          <VStack display={{ base: "flex", md: "none" }} alignItems="stretch" px={{ base: 4, sm: 6 }} pb={4} spacing={2}>
            <Link href="/" onClick={onToggle}>Home</Link>
            <Link href="/#projects" onClick={onToggle}>Portfolio</Link>
            <Link href="/#contact-me" onClick={onToggle}>Contact Me</Link>
          </VStack>
        ) : null}
      </Box>
    </Box>
  );
};
export default Header;
