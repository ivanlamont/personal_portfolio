import YouTube from "react-youtube";
import React from "react";
import withSingleSection, { SingleSectionProps } from "./withSingleSection";
import { Grid, GridItem, Heading, Text, Box, Link  } from "@chakra-ui/react";
import { PageProps } from "../pages/MultiSectionPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";

const yt1_dev_since_2002 = 'dxyewhrAX4w';
const yt2_tools_history = 'Zk2d0SDFJo4';
const yt3_null_safety = '-x0jaGv90So';
const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
    <GridItem colSpan={2}>
        <Heading as={heading_type} size={heading_size}>Recent Mobile Development</Heading>
        <Text>There aren't many coders out there that have been creating applications for handheld devices as long as I have!  In fact, Mobile development wasn't even in it's infancy when Nathan approached me, with the idea to connect GPS signals to an MP3 player.</Text>
    </GridItem>
);

const Historical: React.FC = () => (
    <GridItem>
        <Text>I recently sat down with some STEM pupils at my sons school to talk about the history of the now-ubiquitous devices.  Here's an excerpt or two. </Text>
        <YouTube videoId={yt1_dev_since_2002} />
        <Text>Explaining a little about the history of mobile development, and how it has changed over the years.</Text>
    </GridItem>
);

const Tooling: React.FC = () => (
    <GridItem>
        <Text>The leaps forward in mobile development are still coming.  </Text>
        <YouTube videoId={yt3_null_safety} />
        <Text>Proper NULL safety is a key factor in making applications zip along.  That's one of the things I really love about Flutter, as a development system.  I have used React Native also - it's good, and it's really nice that it shares so many structures with ReactJS.  The number of developers who can make the move from the web to the mobile world is much greater as a result.</Text>
    </GridItem>
);

const Languages: React.FC = () => (
    <GridItem>
        <Text>There are quite a few different languages and platforms that have been built, to allow us to create applications for mobile devices.  When I first started, they were just "PDAs" - short for Personal Digital Assistants.  This was a small palm-sized computer that you could use to track your appointments and take notes.  Initially, most of them did not have any networking abilities at all, certainly not telephony.  Wifi slowly came along, then cellular.  There was a period there around 2004 where carrying two or more devices was not uncommon.  It was obvious that a convergence was going to happen, and I was in the right place at the time to take advantage.</Text>
        <YouTube videoId={yt2_tools_history} />
        <Text>Tooling, however, was dreadful.  And there were many different platforms to target.  Which meant that you either had a small target installed base, or you had to find some sort of cross-platform technology.  Today Windows CE, PalmOS and BlackBerry are all gone.  We just have Android and Apple.</Text>
    </GridItem>
);

const MobileHistorySectionBox: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >
        <StandardGrid>
            <Intro />
            <Historical />
            <Languages />
        </StandardGrid>
    </FullScreenSection>;  
};

const MobileRecentSectionBox: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >
        <StandardGrid>
            <Tooling />
        </StandardGrid>  
    </FullScreenSection>
}

export const MobileHistorySection = withSingleSection(MobileHistorySectionBox);
export const MobileRecentSection = withSingleSection(MobileRecentSectionBox);


