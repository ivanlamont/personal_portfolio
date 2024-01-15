import YouTube from "react-youtube";
import React from "react";
import withFullScreen from "./withFullScreen";
import { Box, Heading, VStack } from "@chakra-ui/react";

const yt1_dev_since_2002 = 'dxyewhrAX4w';
const yt2_tools_history = 'Zk2d0SDFJo4';
const yt3_null_safety = '-x0jaGv90So';

const MobileHistorySectionBox: React.FC = () => {
 
    return <Box> 
        <Heading as="h1" id="projects-section">
            Recent Mobile Development
        </Heading>

        <VStack marginTop={120}>
            <Box>
                Mobile development wasn't even in it's infancy when Nathan approached me, with the idea to connect GPS signals to an MP3 player.
            </Box>
            <YouTube videoId={yt1_dev_since_2002} />
            <Box>              
                Is it easier to write mobile code today, compared to two decades ago?
            </Box>
            <YouTube videoId={yt2_tools_history} />
            <Box> 
                All languages are the same, surely?             
            </Box>
            <YouTube videoId={yt3_null_safety} />
            <Box>              
            </Box>
            <Box>              
            </Box>
        </VStack>
    </Box>
};

const MobileHistorySection = withFullScreen(MobileHistorySectionBox);

export default MobileHistorySection;

