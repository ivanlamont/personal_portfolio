import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import withFullScreen from "./withFullScreen";

const projects_json = './subsections.json'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectsSectionBox: React.FC = () => {
  
  const [projectsList, setProjectsList] = useState<Project[]>([]);

  useEffect(() => {
    axios
    .get(projects_json)
    .then((result) => setProjectsList(result.data.projects))
    .catch(err=>console.log('hmmm=>',err))
  },[]);

  return <Box> 
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
  </Box>
};

const ProjectsSection = withFullScreen(ProjectsSectionBox);

export default ProjectsSection;
