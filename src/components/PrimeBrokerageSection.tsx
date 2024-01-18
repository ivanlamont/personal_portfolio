import YouTube from "react-youtube";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Flex, Center, Square, Box, Heading, VStack, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const yt_prime_brokerage_ops = 'bSDkoWqCGL8';
const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Prime Brokerage</Heading>
    <Text>I have a great deal of expertise in the field of Prime Brokerage Development, having worked with numerous prime desks in BancBoston Robertson Stevens, Conifer Securities, and BTIG, as well as building the Geneva platform at Advent Software – a system that is designed primarily for use with brokerages.
    </Text>
  </Box>
);

const PrimeBrokerage: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>The Nature of the Beast</Heading>
    <Text>The primary concern in any Prime Brokerage, and the thing that sets this line of business apart from all its peers in Financial Services, is that positions are held overnight.
    This brings many additional responsibilities to bear.  First and foremost, positions must all be priced and described.  Pricing highly liquid securities such as NYSE listed equities is a science, but as we get away from liquidity, we find pricing becomes more of an art.  Selecting a reliable vendor with a readily explainable pricing algorithm is crucial.  
    </Text>
  </Box>
);

const AccountingSystems: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Accounting Systems</Heading>
    <Text>A very important early decision that any business must make when starting a Prime Brokerage business is the selection of the accounting platform that will be used to track positions, and produce reports.  There are many good choices available, including Experian, Charles River, and Geneva.  With a good platform, the business will be able to produce eye-catching reports that allow clients additional insight into their investments, and grow the AUM numbers.
    </Text>
  </Box>
);

const MarginRiskCalls: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Margin, Risk, and Calls</Heading>
    <Text>Pricing an investment means updating its value.  And that means that any associated leverage needs to be recalculated, and if necessary, calls may need to be made, if the Fed or House calls thresholds are breached.  During periods of high volatility, the business may need to recalculate these numbers in real-time ahead of market closure, in order to ensure that any calls that do occur overnight are of a manageable magnitude, before things get too far out of hand.
    </Text>
  </Box>
);

const OptionsExercisesAssignments: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Options – Exercises and Assignments</Heading>
    <Text>Many traders these days like to include derivatives in their portfolios in order to enhance returns.  These bring with them their own challenges, especially with regard to short options positions that have American exercise style, as they may be assigned at any time by the holder of the long side of the option, with the notice being delivered by the CBOE to the custodian overnight.  These must all be processed correctly in time for the open of the following trading session.
    </Text>
  </Box>
);

const SymbolChangesCorporateActionsSplits: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Symbol Changes, Corporate Actions and Splits</Heading>
    <Text>The challenge with dealing with symbol changes, and stock splits, is that they are effective on the morning of the event, not the night before.  So prior night processing must not take account of the changes, but the positions that are delivered downstream to trading execution platforms, should.
    </Text>
  </Box>
);

const MoneyMarketCapitalActivity: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Money Market and Capital Activity</Heading>
    <Text>Custodians will normally report capital activity, dividend payments, cash deposits and withdrawals, wires and other money market activity in an overnight drop, these all need to be processed and booked into the accounting platform before reporting can be finalized.  A well architected overnight processing system will incorporate a preliminary reporting run that reflects the days’ activity pre-money market, and then simply revises the ones that are impacted when the data becomes available.
    </Text>
  </Box>
);

const IntegrationWithTradingPlatforms: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Integration with Trading Platforms</Heading>
    <Text>Prime brokerage businesses do not sit in isolation.  Most accounts will require some downstream integration, so that updated positions and activity, and all the associated reporting, is available ahead of the open of the electronic trading sessions (the “pre-market”) at 1am ET.  This can involve making data available via secured API calls from remote users, as well as push out of data files and reports via FTP.
    </Text>
  </Box>
);

const Compliance: React.FC = () => (
  <Box>
    <Heading as={heading_type} size={heading_size}>Compliance</Heading>
    <Text>Prime Brokerage businesses need to comply with a very broad spectrum of regulation, including FINRA rules, GDPR, PATRIOT act requirements and more.  It is essential to have tools to find and resolve Fed Calls and House Calls for margin accounts in a timely manner.  Additionally, accounts with advanced options trading activity may require special permissions in order to hold positions that are associated with higher risk profiles, such as uncovered calls, or spreads with large assignment risk on the short legs.  Additionally, it’s wise for a business to have highly experienced team members that can spot potential compliance issues before they become real – such as ensuring that PII data is not stored unless it’s really needed, and if so, then it’s stored with appropriate security.</Text>
  </Box>
);

const PrimeBrokerageSection = (props: { colors: string[]; colorIndex: number; }) => (
  <FullScreenSection
    isDarkBackground
    backgroundTopColor={props.colors[props.colorIndex-1]}
    backgroundBottomColor={props.colors[props.colorIndex]}
  >  
    <StandardGrid>
      <GridItem  colSpan={2}>    
        <Intro />
      </GridItem>
      <PrimeBrokerage />
      <GridItem>
        <YouTube videoId={yt_prime_brokerage_ops} />
      </GridItem>
      <AccountingSystems />
      <MarginRiskCalls />
      <OptionsExercisesAssignments />
      <SymbolChangesCorporateActionsSplits />
      <MoneyMarketCapitalActivity />
      <IntegrationWithTradingPlatforms />
      <Compliance />
    </StandardGrid>  
  </FullScreenSection>
);

export default PrimeBrokerageSection;
  


