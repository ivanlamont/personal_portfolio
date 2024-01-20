import YouTube from "react-youtube";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { ColorPageProps } from "../pages/ColorPage";

const yt_flying = "0SvEWnMtX-A"
const yt_landing = "napcu2KH5EU";

const heading_type = "h3"
const heading_size = "md"

type FlinkProps = {
  url: string;
  text: string;
}

const Flink: React.FC<FlinkProps> = (props) => {
  return <Link href={props.url} target="_blank" color='teal.500'>{props.text}</Link>  
}

const Intro: React.FC = () => (
    <Box>
      {/* <Avatar size='2xl' name='Ivan J. Lamont' src={require("../images/self_small.jpg")} /> */}
      <Heading as={heading_type} size={heading_size}>Extracurricular Activities</Heading>
      <Text></Text>
    </Box>
  );

const Pilot: React.FC = () => (
<GridItem>
    <Heading as={heading_type} size={heading_size}>Flying</Heading>
    <Text>As a young lad growing up in Ireland, I always wanted to become a pilot.</Text>
    <Image margin={"9px"} height="200px" src={require("../images/aviation.jpg")} alt="Flying" />
    <Text>Unfortunately, <Flink url="https://www.aerlingus.com" text="Aer Lingus" /> were never hiring, so I decided to follow my passion for computer programming instead.  When I moved to America, I spent some of my spare time learning to fly out of <Flink url="https://www.oaklandairport.com/" text="Oakland" />.  So far I have earned my FAA Commercial Pilot license with an Instrument Rating.  I plan on getting my Certified Flight Instructor cert before the decade is out</Text>
</GridItem>
);

const FlightReview: React.FC = () => (
  <GridItem>
      <Text>Every two years we have to do a Biannual Flight Review with an instructor</Text>
      <YouTube videoId={yt_flying} />
      <Text>I decided to have a little fun, on this one - back to where it all began, into Oakland International, the north complex.  The runways have been renumbered as 28L and 28R now.  I first flew solo from 27R, I feel like they took it away from me!</Text>
  </GridItem>
  );

const Landing: React.FC = () => (
  <GridItem>
      <Text>Landing a C-172 at Petaluma</Text>
      <YouTube videoId={yt_landing} />
      <Text>My son did a pretty good job with the camera, I think</Text>
  </GridItem>
  );
  
const GuitarBuilder: React.FC = () => (
  <GridItem>
      <Heading as={heading_type} size={heading_size}>Guitar Building</Heading>
      <Text>Rock & Roll has to come from somewhere, right?  I've made a few electric guitars, and I am in the process of making a few more.  This video shows the neck being shaped for one of the three replicas that I am making of the 1976 Gibson Explorer.  The wood is mahogany.  I plan to give one of each of these to my sons, when the time is right.</Text>
  </GridItem>
);

const RingZero: React.FC = () => (
  <GridItem>
      <Heading as={heading_type} size={heading_size}>Rock & Roll</Heading>
      <Text>For a number of years, I was the lead singer and lead guitarist for Ring Zero.  </Text>
      <Image src={require("../images/ring-zero.png")} alt="Referee" />  
      <Text>It's hard to beat the thrill of playing guitar at full volume for a crowd - the adrenaline is incredible.  We played a few memorable shows, and I sometimes dream about "getting the band back together"!</Text>
  </GridItem>
);

const ManchesterUnited: React.FC = () => (
  <GridItem>
      <Heading as={heading_type} size={heading_size}>Glory, Glory...</Heading>
      <Text>Mecca for any <Flink url="https://www.manchesterunited.com/" text="Manchester United" /> fan is Old Trafford.  I've been there several times, and one day I hope to bring my three sons too.  Although one of them is, sadly, a Chelsea fan! </Text>
      <Center><Image src={require("../images/old-trafford.avif")} alt="Referee" />  </Center>
      <Text>Like most United fans, I remember so fondly the days of Sir Alex Ferguson - we hope some day to see a manager half as good at the helm!</Text>
  </GridItem>
);


const ChessPlayer: React.FC = () => (
  <GridItem>
      <Heading as={heading_type} size={heading_size}>Chess</Heading>
      <Text>I love Chess, I play a little every day.  I've had a rating of 1900 before, but it takes a heck of a lot of practice to remain at the top of your game, and right now I'm pretty busy!</Text>
      <Center>
        <Image height={"420px"} src={require("../images/chess.jpg")} alt="Referee" alignContent={"center"} />
      </Center>
      <Text>I'm a d4 player.  None of this kings-pawn complications for me.  A nice open game please.  I know the <Flink url="https://www.amazon.com/s?k=Meran-Anti-Meran-Variations-Alexey-Dreev" text="Meran and Anti-Meran variations" /> and the Moscow quite well, be warned!  If you'd like to play me, the link to my chess.com account is in the header.</Text>
  </GridItem>
  );
      
const Referee: React.FC = () => (
  <GridItem>
      <Heading as={heading_type} size={heading_size}>Refereeing</Heading>
      <Text>I've been a <Flink url="https://www.ussoccer.com/referee-program" text="licensed soccer referee" /> since 2019.  It's an excellent way to keep fit, and if you have the required temperament, it's a great experience.  I love it - if you love football, give it a shot!</Text>
      <Image src={require("../images/referee.jpg")} alt="Referee" />  
  </GridItem>
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
        <Landing />
      </GridItem>
      <GridItem>
        <FlightReview />
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
