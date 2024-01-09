import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects_json = './subsections.json'

const ProjectsSection = (props) => {
  
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    axios
    .get(projects_json)
    .then((result) => setProjectsList(result.data.projects))
    .catch(err=>console.log('hmmm=>',err))
  },[]);

  return (
    <FullScreenSection
      backgroundTopColor={props.colors[props.colorIndex-1]}
      backgroundBottomColor={props.colors[props.colorIndex]}
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
