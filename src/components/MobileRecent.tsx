import React from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import withFullScreen from "./withFullScreen";
import { StandardGrid } from "./FullScreenSection";

const MobileRecentSectionBox: React.FC = () => {
  
  const rows = 1;
 
  return <Box> 
    <Heading as="h1" id="projects-section">
        Recent Mobile Development
    </Heading>

      <StandardGrid>
        <> </>
      </StandardGrid>

  </Box>
};

const MobileRecentSection = withFullScreen(MobileRecentSectionBox);

export default MobileRecentSection;
