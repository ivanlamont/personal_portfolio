import YouTube from "react-youtube";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { ColorPageProps } from "../pages/ColorPage";

const yt_flying = "0SvEWnMtX-A"
const yt_landing = "napcu2KH5EU";

const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
    <Box>
        <Avatar
              size='2xl'
              name='Ivan J. Lamont'
              src={require("../images/self_small.jpg")}
            />
      <Heading as={heading_type} size={heading_size}>Extracurricular Activities</Heading>
      <Text></Text>
    </Box>
  );

const Pilot: React.FC = () => (
<Box>
    <Heading as={heading_type} size={heading_size}>Flying</Heading>
    <Image src={require("../images/aviation.jpg")} alt="Flying" />
    <Text>As a young lad growing up in Ireland, I always wanted to become a pilot.  But <Link href="https://aerlingus.com" target="_blank">Aer Lingus</Link> were never hiring, so I decided to follow my passion for computer programming instead.  When I moved to America, I spent some of my spare time learning to fly out of <Link href="https://www.oaklandairport.com/" target="_blank">Oakland</Link>.  So far I have earned my FAA Commercial Pilot license with an Instrument Rating.  I plan on getting my Certified Flight Instructor cert before the decade is out</Text>
</Box>
);

const GuitarBuilder: React.FC = () => (
  <Box>
      <Heading as={heading_type} size={heading_size}>Guitar Building</Heading>
      <Text>Rock & Roll has to come from somewhere, right?  I've made a few electric guitars, and I am in the process of making a few more.  This video shows the neck being shaped for one of the three replicas that I am making of the 1976 Gibson Explorer.  The wood is mahogany.  I plan to give one of each of these to my sons, when the time is right.</Text>
  </Box>
);

const RingZero: React.FC = () => (
  <Box>
      <Heading as={heading_type} size={heading_size}>Rock & Roll</Heading>
      <Text>For a number of years, I was the lead singer and lead guitarist for Ring Zero.  It's hard to beat the thrill of playing guitar at full volume for a crowd - the adrenaline is incredible.  We played a few memorable shows, and I sometimes dream about "getting the band back together"!</Text>
  </Box>
);

const ManchesterUnited: React.FC = () => (
  <Box>
      <Heading as={heading_type} size={heading_size}>Glory, Glory...</Heading>
      <Text>Mecca for any Manchester United fan is Old Trafford.  I've been there several times, and one day I hope to bring my three sons too.  Although one of them is a Chelsea fan!  Eeeew.</Text>
  </Box>
);


const ChessPlayer: React.FC = () => (
  <Box>
      <Heading as={heading_type} size={heading_size}>Chess</Heading>
      <Text>I love Chess, I play a little every day.  I've had a rating of 1900 before, but it takes a lot of practice.  If you'd like to play me, the link to my chess.com account is in the header.</Text>
  </Box>
  );
      
const Referee: React.FC = () => (
  <Box>
      <Heading as={heading_type} size={heading_size}>Refereeing</Heading>
      <Text>I've been a <Link href="https://www.ussoccer.com/referee-program" target="_blank">licensed soccer referee</Link> since 2019.  It's an excellent way to keep fit, and if you have the required temperament, it's a great experience.  I love it - if you love football, give it a shot!</Text>
      <Image src={require("../images/referee.jpg")} alt="Referee" />
  </Box>
);
        

const AboutFlying: React.FC<ColorPageProps> = (props) => {
    return <FullScreenSection      
      backgroundTopColor={props.colorSet[(props.colorIndex ?? 1 ) - 1]}
      backgroundBottomColor={props.colorSet[props.colorIndex ?? 1]}
    >  
    <StandardGrid>
      <GridItem colSpan={2}>
        <Intro />
      </GridItem>
      <GridItem>
        <Pilot />
      </GridItem>
      <GridItem>
        <Text>Here's a recent flight back to OAK</Text>
        <YouTube videoId={yt_flying} />
      </GridItem>
      <GridItem>
        <Text>Landing a C-172 at Petaluma</Text>
        <YouTube videoId={yt_landing} />
      </GridItem>
    </StandardGrid>
  </FullScreenSection>;
  
}  

const AboutMusic: React.FC<ColorPageProps> = (props) => {
  return <FullScreenSection      
    backgroundTopColor={props.colorSet[(props.colorIndex ?? 1 ) - 1]}
    backgroundBottomColor={props.colorSet[props.colorIndex ?? 1]}
  >  
    <StandardGrid>
      <RingZero />
      <GuitarBuilder />
    </StandardGrid>
  </FullScreenSection>;

}  
   
const AboutSports: React.FC<ColorPageProps> = (props) => {
  return <FullScreenSection      
    backgroundTopColor={props.colorSet[(props.colorIndex ?? 1 ) - 1]}
    backgroundBottomColor={props.colorSet[props.colorIndex ?? 1]}
  >  
    <StandardGrid>
      <ChessPlayer />
      <Referee />
      <ManchesterUnited />
    </StandardGrid>
  </FullScreenSection>;

}  

const AboutSection: React.FC<ColorPageProps> = (props) => {
    return <>
      <AboutFlying  {...props} colorIndex={1} />
      <AboutMusic {...props} colorIndex={2} />
      <AboutSports  {...props} colorIndex={3} />
    </>    
}

  
export default AboutSection;
