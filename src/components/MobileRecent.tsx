import React from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import withFullScreen from "./withFullScreen";

const MobileRecentSectionBox: React.FC = () => {
  
  const rows = 1;
 
  return <Box> 
    <Heading as="h1" id="projects-section">
        Recent Mobile Development
    </Heading>

      <Grid
        h='200px'
        templateRows={`repeat(${rows}, 1fr)`}
        templateColumns={`repeat(${2}, 1fr)`}
        gap={4}
      >
      </Grid>

  </Box>
};

const MobileRecentSection = withFullScreen(MobileRecentSectionBox);

export default MobileRecentSection;
