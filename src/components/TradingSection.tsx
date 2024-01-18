import YouTube from "react-youtube";
import FullScreenSection from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { StandardGrid } from "./FullScreenSection";
import { ColorPageProps } from "../pages/ColorPage";

const yt_trading_latency = 'XGyGISmAhik';
const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}></Heading>
    <Text>I have been working as a developer in the financial services industry since the start of my career, in Dublin, Ireland.  Most recently, I spent sixteen years at a major broker-dealer in San Francisco, primarily working with trading and prime brokerage systems.  I love building things that make everyones jobs easier.    </Text>
  </Box>
);

const TradeManagementApps: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Trade Management</Heading>
    <Text>The first trade management system I helped build, was for Banc Boston Robertson Stevens.  We used C++ and built a three-tier architecture which was fault tolerant and used a proprietary ticketing system developed in-house.  The UI was touchscreens, installed on every trading desk.  By today's standards, it was pretty primitive.  It supported only equities, and had very limited order routing capability.  But, it worked.    </Text>
  </Box>
);

const Conifer: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}></Heading>
    <Text>I took my skills to Conifer Securities where I led the effort to build a bigger, more capable system that managed not only trade execution, but order management, portfolio allocation, commissions, and risk.  Again built using the Microsoft stack, MS-SQL , C++ and VB, and later C#.  This was the first time I encountered the FIX protocol, used for sending trading messages over the wire.  Although the final product was successful, there were issues with latency that were very challenging to overcome.  Order routing was very basic, I could see there was scope for a great deal of innovation in this area, given enough time.    </Text>
  </Box>
);

const Latency: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Trade Execution Latency</Heading>
    <Text>Modern trading technology relies greatly on low latency connectivity to the market, in order to ensure systems have the most accurate data on the current market order book, and hit the best prices for every trade.  For this reason, C++ has often been chosen as the language of choice, indeed some claim it is the only choice, for trade execution code to be written in.    </Text>
  </Box>
);

const Overheads: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Overheads</Heading>
    <Text>However, I feel that this is no longer the case.  The additional overheads involved in using C++ have often been worth the effort required - but since the release of the .NET Core platform, there's now a serious challenger to this crown in the form of C#.    </Text>
  </Box>
);

const NetCoreMaturity: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Platform Maturity</Heading>
    <Text>The .NET Core platform reaches its tenth anniversary of launch this year (2024) and has reached a level of maturity, in particular with regard to improvements in the garbage collection of unused memory, that mean that it should be a serious candidate for new development in trade execution platforms.    </Text>
  </Box>
);

export const TradingSection: React.FC<ColorPageProps> = (props) => {
    return <FullScreenSection
      isDarkBackground
      backgroundTopColor={props.colorSet[(props.colorIndex??1)-1]}
      backgroundBottomColor={props.colorSet[props.colorIndex??1]}
      >  
      <StandardGrid>
        <GridItem colSpan={2}>
          <Heading as={"h1"} size={"lg"}>Financial Services</Heading>
          <Intro />
        </GridItem>
        <GridItem rowSpan={2}>
          <TradeManagementApps></TradeManagementApps>
          <Conifer />
        </GridItem>
        <GridItem>
          <Latency />
          <GridItem>
            <YouTube videoId={yt_trading_latency} />
          </GridItem>
          <Overheads />
        </GridItem>
        <NetCoreMaturity />
      </StandardGrid>
    </FullScreenSection>
}
  
  