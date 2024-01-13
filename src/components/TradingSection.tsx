import FullScreenSection from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const TradingSection = (props: { colors: string[]; colorIndex: number; }) => (
    <FullScreenSection
      isDarkBackground
      backgroundTopColor={props.colors[props.colorIndex-1]}
      backgroundBottomColor={props.colors[props.colorIndex]}
    >  
      <Grid
        h='530px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={2}
      >
        <GridItem colSpan={1} >
          <Text fontSize='md'>The first trade management system I helped build, was for BancBoston Robertson Stevens.  We used C++ and built a three-tier architecture which was fault tolerant and used a proprietary ticketing system developed in-house.  The UI was touchscreens, installed on every trading desk.  By today's standards, it was pretty primitive.  It supported only equities, and had very limited order routing capability.  But, it worked.
I took my skills to Conifer Securities where I led the effort to build a bigger, more capable system that managed not only trade execution, but order management, portfolio allocation, commissions, and risk.  Again built using the Microsoft stack, MS-SQL , C++ and VB, and later C#.  This was the first time I encountered the FIX protocol, used for sending trading messages over the wire.  Although the final product was successful, there were issues with latency that were very challenging to overcome.  Order routing was very basic, I could see there was scope for a great deal of innovation in this area, given enough time.
Modern trading technology relies greatly on low latency connectivity to the market, in order to ensure systems have the most accurate data on the current market order book, and hit the best prices for every trade.  For this reason, C++ has often been chosen as the language of choice, indeed some claim it is the only choice, for trade execution code to be written in.
However, I feel that this is no longer the case.  The additional overheads involved in using C++ have often been worth the effort required - but since the release of the .NET Core platform, there's now a serious challenger to this crown in the form of C#.
The platform reaches it's tenth anniversary of launch this year (2024) and has reached a level of maturity, in particular with regard to improvements in the garbage collection of unused memory, that mean that it should be a serious candidate for new development in trade execution platforms.
</Text>
        </GridItem>        
      </Grid>
    </FullScreenSection>
  );
  
  export default TradingSection;
  