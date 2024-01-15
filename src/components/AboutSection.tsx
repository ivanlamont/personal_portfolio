import YouTube from "react-youtube";
import FullScreenSection from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const yt_flying = "0SvEWnMtX-A"
const yt_landing = "napcu2KH5EU";

const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
    <Box>
      <Heading as={heading_type} size={heading_size}></Heading>
      <Text></Text>
    </Box>
  );

const Pilot: React.FC = () => (
<Box>
    <Heading as={heading_type} size={heading_size}>Flying</Heading>
    <Text>As a young lad growing up in Ireland, I always wanted to become a pilot.  But <Link href="aerlingus.com">Aer Lingus</Link> were never hiring, so I decided to follow my passion for computer programming instead.  When I moved to America, I spent some of my spare time learning to fly out of <Link href="https://www.oaklandairport.com/">Oakland.  So far I have earned my FAA Commercial Pilot license with an Instrument Rating.  I plan on getting my Certified Flight Instructor cert before the decade is out</Link></Text>
</Box>
);

const GuitarBuilder: React.FC = () => (
    <Box>
        <Heading as={heading_type} size={heading_size}>Guitar Building</Heading>
        <Text>Rock & Roll has to come from somewhere, right?  I've made a few electric guitars, and I am in the process of making a few more.  This video shows the neck being shaped for one of the three replicas that I am making of the 1976 Gibson Explorer.  The wood is mahogany.  I plan to give one of each of these to my sons, when the time is right.</Text>
    </Box>
    );

const ChessPlayer: React.FC = () => (
    <Box>
        <Heading as={heading_type} size={heading_size}>Chess</Heading>
        <Text>I love Chess, I play a little every day.  I've had a rating of 1900 before, but it takes a lot of practice.  If you'd like to play me, the link to my chess.com account is in the header.</Text>
    </Box>
    );
        

const AboutSection = (props: { colors: string[]; colorIndex: number; }) => (
    <FullScreenSection
      isDarkBackground
      backgroundTopColor={props.colors[props.colorIndex-1]}
      backgroundBottomColor={props.colors[props.colorIndex]}
    >  
      <Grid
        marginTop={100}
        h='530px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={2}
      >
        <Avatar
              size='2xl'
              name='Ivan J. Lamont'
              src={require("../images/self_small.jpg")}
            />
        <Intro></Intro>
        <Pilot></Pilot>
        <GridItem>
            <Text>Here's a recent flight back to OAK</Text>
            <YouTube videoId={yt_flying} />
        </GridItem>
        <GridItem>
            <Text>Landing a C-172 at Petaluma</Text>
            <YouTube videoId={yt_landing} />
        </GridItem>
        <GuitarBuilder></GuitarBuilder>
        <ChessPlayer />
      </Grid>
    </FullScreenSection>
  );

export default AboutSection;
