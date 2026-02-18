import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { Box, SimpleGrid, GridItem, Heading } from "@chakra-ui/react";
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

  return <Box> 

      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={{ base: 4, md: 6 }}
        w="100%"
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
      </SimpleGrid>

  </Box>
};

const ProjectsSection = withSingleSection(ProjectsSectionBox);

export default ProjectsSection;
