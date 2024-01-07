import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Financial Services",
    link: "/FinancialServices",
    description:
      "Most of my Financial Services work has been in Equities, Options and Fixed Income.\nI began my career with Insurance, next came Trade Execution and Order Management, then Prime Brokerage",
    getImageSrc: () => require("../images/financial-services.jpg"),
  },
  {
    title: "Artificial Intelligence",
    link: "/ArtificialIntelligence",
    description:
      "Machine Learning, and Artificial Intelligence in general, has recently been the fastest growing arena for my development work. You can see what I've been up to, here.",
    getImageSrc: () => require("../images/machine-learning.jpg"),
  },
  {
    title: "Mobile, Tourism & Geolocation",
    link: "/Mobile",
    description:
      "My most successful Start-Up experience, and an area that I am still very active in, is Mobile Application Development.  Beginning in 2002 with C on the Garmin iQue 3600, I'm now a total Android junkie.",
    getImageSrc: () => require("../images/gocartours.jpg"),
  },
  {
    title: "About",
    link: "/About",
    description:
      "I don't just write code!",
    getImageSrc: () => require("../images/self_small.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Areas of Expertise
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
