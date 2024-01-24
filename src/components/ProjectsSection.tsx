import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import Card from "./Card";
import withSingleSection from "./withSingleSection";
import { SpringIn } from "./SpringIn";

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

  const rows = 2;
  const cols = Math.ceil(projectsList.length/rows);

  return <Box> 

      <Grid
        h='630px'
        templateRows={`repeat(${rows}, 1fr)`}
        templateColumns={`repeat(${cols}, 1fr)`}
        gap={3}
      >
      {projectsList.map((project) => (
          <GridItem key={project.title}>
            <SpringIn>
              <Card
                {...project}
                key={project.title} 
                imageSrc={require("../images/" + project.image)}
                target={project.link}
              />
            </SpringIn>
          </GridItem>
        ))}
      </Grid>

  </Box>
};

const ProjectsSection = withSingleSection(ProjectsSectionBox);

export default ProjectsSection;
