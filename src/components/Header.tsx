import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, FormLabel, Switch, Link } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

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

  const [theme, setTheme] = useState<string>('light');
  const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const isCurrentlyDark = theme === 'dark';

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
            <HStack spacing={10}>
              {
                socials.map(function(s, index) {return <a key={index} href={s.url} target="_blank"><FontAwesomeIcon icon={s.icon} size="2x" /></a>})
              }              
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link href="/" key="home" onClick={handleClick('home')}>Home</Link>
              <Link href="/#projects" key="projects" onClick={handleClick('projects')}>Portfolio</Link>
              <Link href="/#contact-me" key="contact" onClick={handleClick('contactme')}>Contact Me</Link>
              {/* <FormLabel htmlFor='isChecked'>Dark:</FormLabel><Switch id='isChecked' isChecked={isCurrentlyDark} onChange={toggleTheme} /> */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
