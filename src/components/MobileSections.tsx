import YouTube from "react-youtube";
import React from "react";
import withFullScreen from "./withFullScreen";
import { Grid, GridItem, Heading, Text, Box, Link  } from "@chakra-ui/react";
import { ColorPageProps } from "../pages/ColorPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";

const yt1_dev_since_2002 = 'dxyewhrAX4w';
const yt2_tools_history = 'Zk2d0SDFJo4';
const yt3_null_safety = '-x0jaGv90So';
const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
    <GridItem colSpan={2}>
        <Heading as={heading_type} size={heading_size}>Recent Mobile Development</Heading>
        <Text>Mobile development wasn't even in it's infancy when Nathan approached me, with the idea to connect GPS signals to an MP3 player.</Text>
    </GridItem>
);

const Historical: React.FC = () => (
    <GridItem>
        <Text>Explaining a little about the history of mobile development, and how it has changed over the years.</Text>
        <YouTube videoId={yt1_dev_since_2002} />
    </GridItem>
);

const Tooling: React.FC = () => (
    <GridItem>
        <Text>Is it easier to write mobile code today, compared to two decades ago?</Text>
        <YouTube videoId={yt2_tools_history} />
    </GridItem>
);

const Languages: React.FC = () => (
    <GridItem>
        <Text>All languages are the same, surely?</Text>
        <YouTube videoId={yt3_null_safety} />
    </GridItem>
);

const MobileHistorySectionBox: React.FC<ColorPageProps> = (props) => {
    return <FullScreenSection
      isDarkBackground
      backgroundTopColor={props.colorSet[(props.colorIndex ?? 1 ) - 1]}
      backgroundBottomColor={props.colorSet[props.colorIndex ?? 1]}
    >  
        <StandardGrid>
            <Intro />
            <Historical />
        </StandardGrid>
    </FullScreenSection>;  
};

const MobileRecentSectionBox: React.FC<ColorPageProps> = (props) => {
    return <FullScreenSection
      isDarkBackground
      backgroundTopColor={props.colorSet[(props.colorIndex??1)-1]}
      backgroundBottomColor={props.colorSet[props.colorIndex??1]}
    >  
        <StandardGrid>
            <Tooling />
            <Languages />
        </StandardGrid>  
    </FullScreenSection>
}

export const MobileHistorySection = withFullScreen(MobileHistorySectionBox);
export const MobileRecentSection = withFullScreen(MobileRecentSectionBox);


