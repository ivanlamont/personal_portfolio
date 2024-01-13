import FullScreenSection from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const really_big_font = "50px"

const PrimeBrokerageSection = (props: { colors: string[]; colorIndex: number; }) => (
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
          <Text fontSize="sm">
          Prime Brokerage
The primary concern in any Prime Brokerage, and the thing that sets this line of business apart from all its peers in Financial Services, is that positions are held overnight.
This brings many additional responsibilities to bear.  First and foremost, positions must all be priced and described.  Pricing highly liquid securities such as NYSE listed equities is a science, but as we get away from liquidity, we find pricing becomes more of an art.  Selecting a reliable vendor with a readily explainable pricing algorithm is crucial.  
Accounting Systems
A very important early decision that any business must make when starting a Prime Brokerage business is the selection of the accounting platform that will be used to track positions, and produce reports.  There are many good choices available, including Experian, Charles River, and Geneva.  With a good platform, the business will be able to produce eye-catching reports that allow clients additional insight into their investments, and grow the AUM numbers.
Margin, Risk, and Calls
Pricing an investment means updating its value.  And that means that any associated leverage needs to be recalculated, and if necessary, calls may need to be made, if the Fed or House calls thresholds are breached.  During periods of high volatility, the business may need to recalculate these numbers in real-time ahead of market closure, in order to ensure that any calls that do occur overnight are of a manageable magnitude, before things get too far out of hand.
Options – Exercises and Assignments
Many traders these days like to include derivatives in their portfolios in order to enhance returns.  These bring with them their own challenges, especially with regard to short options positions that have American exercise style, as they may be assigned at any time by the holder of the long side of the option, with the notice being delivered by the CBOE to the custodian overnight.  These must all be processed correctly in time for the open of the following trading session.

          </Text>
        </GridItem>        
      </Grid>  
    </FullScreenSection>
  );
  
  export default PrimeBrokerageSection;
  