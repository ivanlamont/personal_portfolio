import FullScreenSection from "./FullScreenSection";
import { Box, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { StandardGrid } from "./FullScreenSection";
import { PageProps } from "../pages/MultiSectionPage";
import { SingleSectionProps } from "./withSingleSection";
import { ResponsiveImage, ResponsiveYouTube } from "./ResponsiveMedia";
import ContentCard from "./ContentCard";

const yt_trading_latency = 'XGyGISmAhik';
const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
  <ContentCard>
    <Heading as={heading_type} size={heading_size}></Heading>
    <Text>I have been working as a developer in the financial services industry since the start of my career, in Dublin, Ireland.  Most recently, I spent sixteen years at a major broker-dealer in San Francisco, primarily working with trading and prime brokerage systems.  I love building things that make everyones jobs easier.    </Text>
  </ContentCard>
);

const TradeManagementApps: React.FC = () => (
  <ContentCard>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} alignItems="start">
      <Box>
        <Heading as={heading_type} size={heading_size}>Trade Management</Heading>
        <Text>The first trade management system I helped build, was for Banc Boston Robertson Stevens.  We used C++ and built a three-tier architecture which was fault tolerant and used a proprietary ticketing system developed in-house.  The UI was touchscreens, installed on every trading desk.  By today's standards, it was pretty primitive.  It supported only equities, and had very limited order routing capability.  But, it worked.    </Text>
      </Box>
      <ResponsiveImage
        src={require("../images/trade_management.jpg")}
        alt="Trade management system"
        maxW={{ base: "16rem", md: "20rem" }}
        mx="auto"
      />
    </SimpleGrid>
  </ContentCard>
);

const Conifer: React.FC = () => (
  <ContentCard>
    <Heading as={heading_type} size={heading_size}></Heading>
    <Text>I took my skills to Conifer Securities where I led the effort to build a bigger, more capable system that managed not only trade execution, but order management, portfolio allocation, commissions, and risk.  Again built using the Microsoft stack, MS-SQL , C++ and VB, and later C#.  This was the first time I encountered the FIX protocol, used for sending trading messages over the wire.  Although the final product was successful, there were issues with latency that were very challenging to overcome.  Order routing was very basic, I could see there was scope for a great deal of innovation in this area, given enough time.    </Text>
  </ContentCard>
);

const Latency: React.FC = () => (
  <ContentCard>
    <Heading as={heading_type} size={heading_size}>Trade Execution Latency</Heading>
    <Text>Modern trading technology relies greatly on low latency connectivity to the market, in order to ensure systems have the most accurate data on the current market order book, and hit the best prices for every trade.  For this reason, C++ has often been chosen as the language of choice, indeed some claim it is the only choice, for trade execution code to be written in, because the smart kids know how to make a FPGA card act like a network card that has been primed to fire off trading messages before the data even reaches the CPU.    </Text>
  </ContentCard>
);

const Overheads: React.FC = () => (
  <ContentCard>
    <Heading as={heading_type} size={heading_size}>Overheads</Heading>
    <Text>However, I feel that this is no longer the case.  The additional overheads involved in using C++ have often been worth the effort required - but since the release of the .NET Core platform, there's now a serious challenger to this crown in the form of C#.    </Text>
  </ContentCard>
);

const NetCoreMaturity: React.FC = () => (
  <ContentCard>
    <Heading as={heading_type} size={heading_size}>Platform Maturity</Heading>
    <Text>The .NET Core platform reaches its tenth anniversary of launch this year (2024) and has reached a level of maturity, in particular with regard to improvements in the garbage collection of unused memory, that mean that it should be a serious candidate for new development in trade execution platforms.    </Text>
  </ContentCard>
);

export const TradingSection: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >
      <StandardGrid>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Heading as={"h1"} size={"lg"}>Financial Services</Heading>
          <Intro />
        </GridItem>
        <GridItem>
          <TradeManagementApps></TradeManagementApps>
          <Conifer />
        </GridItem>
        <GridItem>
          <Latency />
          <Box maxW={{ base: "16rem", md: "22rem" }} mx="auto">
            <ResponsiveYouTube videoId={yt_trading_latency} title="Trade execution latency" />
          </Box>
          <Overheads />
        </GridItem>
        <GridItem>
          <NetCoreMaturity />
        </GridItem>
      </StandardGrid>
    </FullScreenSection>
}
  
  
