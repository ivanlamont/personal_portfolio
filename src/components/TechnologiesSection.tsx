import { ColorPageProps } from "../pages/ColorPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Heading, Text, Image, Grid, GridItem, Link  } from "@chakra-ui/react";
import withFullScreen from "./withFullScreen";
import { motion } from 'framer-motion';
import { Flink } from "./Flink";

const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
  <GridItem colSpan={2}>
      <Heading as={heading_type} size={heading_size}>Technology Experience</Heading>
      <Text>I have used a TON of different Technologies over the course of my career so far.  If you would like to know if I have experience using something, what I did with it, and what I think of it, you've come to the right place</Text>
  </GridItem>  
  );

export type SingleTechBoxProps = {
  image: string;
  description: string;
  title?: string;
  usageHistory?: string;
  score?: number;
  confidenceLevel?: number;
  footer?: string;
  source?: string;
}

export type SectionProps = {
  sectionName: string;
  data: SingleTechBoxProps[];
}

const IconSection: React.FC<SingleTechBoxProps> = (props) => {
  const file = "./" + props.image;

  const GridRowItem = ({ children, areaname }: { children: React.ReactNode, areaname: string }) => (
    children ?
    <GridItem pl='1' area={areaname} bg='white' color='blue.800'>
      {children}
    </GridItem>
    : null
  );
  
  const usageRowHeight = props.usageHistory ? '1fr ' : '';
  const sourceRowHeight = props.source ? '28px ' : '';
  const scoreRowHeight = props.score ? '28px ' : '';
  const confidenceRowHeight = props.confidenceLevel ? '28px ' : '';

  var fields = [];
  fields.push(`"header header"`);
  fields.push(`"icon main"`);
  if (props.usageHistory) fields.push(`"icon usage"`);
  if (props.source) fields.push(`"icon url"`);
  if (props.score) fields.push(`"icon score"`);
  if (props.confidenceLevel) fields.push(`"icon confidence"`);
  fields.push(`"icon footer"`);

  const templateAreasFields = fields.join(' ');
  const templateAreasRows = '28px 1fr' + usageRowHeight + ' '  + sourceRowHeight + ' '+ scoreRowHeight + ' ' + confidenceRowHeight + ' 28px';

  return <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 20 }}
  >
    <Grid
        templateAreas={templateAreasFields}
        gridTemplateRows={templateAreasRows} 
        gridTemplateColumns={'90px 1fr'}
        gap='1'
        border={'1px'}
      >
      <GridItem pl='2' bg='blue.800' color="white" area={'header'}>
        <Heading as={heading_type} size={heading_size}>{props.title}</Heading>
      </GridItem>
      <GridItem pl='2' area={'icon'}>
        <Image src={file} borderRadius='lg' boxSize={"80px"} />
      </GridItem>
      <GridItem pl='1' area={'main'}>
        <Text>{props.description}</Text>
      </GridItem>
      {props.usageHistory ? <GridRowItem areaname="usage"><Text>My Usage History: {props.usageHistory}</Text></GridRowItem> : null}
      {props.source ? <GridRowItem areaname="url"><Text>See: <Flink url={props.source} /></Text></GridRowItem> : null}
      {props.score ? <GridRowItem areaname="score"><Text>I give it {props.score} out of 10</Text></GridRowItem> : null}
      {props.confidenceLevel ? <GridRowItem areaname="confidence"><Text>Currently I rate my strength as {props.confidenceLevel} out of 10</Text></GridRowItem> : null}
      <GridItem pl='2' bg='blue.600' area={'footer'}>
        <Text>Verdict: {props.footer}</Text>
      </GridItem>
    </Grid>
  </motion.div>

}

export const TechnologiesFromFile: React.FC<ColorPageProps & SectionProps> = (props) => {
  
  return <FullScreenSection
    isDarkBackground
    backgroundTopColor={props.colorSet[(props.colorIndex??1)-1]}
    backgroundBottomColor={props.colorSet[props.colorIndex??1]}
  >  
      <StandardGrid>
      {props.data.map((technology) => (
          <GridItem>
            <IconSection {...technology} image={"./" + technology.image} />
          </GridItem>
        ))}
      </StandardGrid>  
  </FullScreenSection>

};


