import React from "react";
import withSingleSection, { SingleSectionProps } from "./withSingleSection";
import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { PageProps } from "../pages/MultiSectionPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { ResponsiveYouTube } from "./ResponsiveMedia";
import ContentCard from "./ContentCard";

const yt1_dev_since_2002 = 'dxyewhrAX4w';
const yt2_tools_history = 'Zk2d0SDFJo4';
const yt3_null_safety = '-x0jaGv90So';
const heading_type = "h3"
const heading_size = "md"
const mediaMaxW = { base: "16rem", md: "22rem" };

const Intro: React.FC = () => (
    <GridItem colSpan={{ base: 1, lg: 2 }}>
      <ContentCard>
        <Heading as={heading_type} size={heading_size}>Recent Mobile Development</Heading>
        <Text>There aren't many coders out there that have been creating applications for handheld devices as long as I have!  In fact, Mobile development wasn't even in it's infancy when Nathan approached me, with the idea to connect GPS signals to an MP3 player.</Text>
      </ContentCard>
    </GridItem>
);

const Historical: React.FC = () => (
    <GridItem>
      <ContentCard>
        <Text>I recently sat down with some STEM pupils at my sons school to talk about the history of the now-ubiquitous devices.  Here's an excerpt or two. </Text>
        <Box maxW={mediaMaxW} mx="auto">
          <ResponsiveYouTube videoId={yt1_dev_since_2002} title="Mobile development since 2002" />
        </Box>
        <Text>Explaining a little about the history of mobile development, and how it has changed over the years.</Text>
      </ContentCard>
    </GridItem>
);

const Tooling: React.FC = () => (
    <GridItem>
      <ContentCard>
        <Text>The leaps forward in mobile development are still coming.  </Text>
        <Box maxW={mediaMaxW} mx="auto">
          <ResponsiveYouTube videoId={yt3_null_safety} title="Mobile tooling and null safety" />
        </Box>
        <Text>Proper NULL safety is a key factor in making applications zip along.  That's one of the things I really love about Flutter, as a development system.  I have used React Native also - it's good, and it's really nice that it shares so many structures with ReactJS.  The number of developers who can make the move from the web to the mobile world is much greater as a result.</Text>
      </ContentCard>
    </GridItem>
);

const Languages: React.FC = () => (
    <GridItem>
      <ContentCard>
        <Text>There are quite a few different languages and platforms that have been built, to allow us to create applications for mobile devices.  When I first started, they were just "PDAs" - short for Personal Digital Assistants.  This was a small palm-sized computer that you could use to track your appointments and take notes.  Initially, most of them did not have any networking abilities at all, certainly not telephony.  Wifi slowly came along, then cellular.  There was a period there around 2004 where carrying two or more devices was not uncommon.  It was obvious that a convergence was going to happen, and I was in the right place at the time to take advantage.</Text>
        <Box maxW={mediaMaxW} mx="auto">
          <ResponsiveYouTube videoId={yt2_tools_history} title="History of mobile tools and languages" />
        </Box>
        <Text>Tooling, however, was dreadful.  And there were many different platforms to target.  Which meant that you either had a small target installed base, or you had to find some sort of cross-platform technology.  Today Windows CE, PalmOS and BlackBerry are all gone.  We just have Android and Apple.</Text>
      </ContentCard>
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


