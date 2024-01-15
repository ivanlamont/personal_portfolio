import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
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

  if (projectsList == null)
    return <Heading>Loading...</Heading>

  const rows = 1;
  const cols = Math.ceil(projectsList.length/rows);

  return <Box> 
    <Heading as="h1" id="projects-section">
        Areas of Expertise
    </Heading>

      <Grid
        h='200px'
        templateRows={`repeat(${rows}, 1fr)`}
        templateColumns={`repeat(${cols}, 1fr)`}
        gap={4}
      >
      {projectsList.map((project) => (
          <GridItem>
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={require("../images/" + project.image)}
              target={project.link}
            />
          </GridItem>
        ))}
      </Grid>

  </Box>
};

const ProjectsSection = withFullScreen(ProjectsSectionBox);

export default ProjectsSection;
