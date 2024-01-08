import React from "react";
import {useState} from "react";
import axios from 'axios';
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const back_top_color = "#6795c6"
const back_bottom_color = "#87a5d6"

const projects_json = './subsections.json'

const ProjectsSection = () => {
  
  const [projectsList, setProjectsList] = React.useState([]);

  React.useEffect(() => {
    axios
    .get(projects_json)
    .then((result) => setProjectsList(result.data.projects))
    .catch(err=>console.log('hmmm=>',err))
  },[]);

  return (
    <FullScreenSection
      backgroundTopColor={back_top_color}
      backgroundBottomColor={back_bottom_color}
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
        {projectsList && projectsList.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={require("../images/" + project.image)}
            target={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
