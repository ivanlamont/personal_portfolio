import { ColorPageProps } from "../pages/ColorPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Heading, Text, Image, Grid, GridItem, Link  } from "@chakra-ui/react";
import withFullScreen from "./withFullScreen";
import { motion } from 'framer-motion';

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
  footer?: string;
  source?: string;
}

export type SectionProps = {
  sectionName: string;
  data: SingleTechBoxProps[];
}

const IconSection: React.FC<SingleTechBoxProps> = (props) => {
  const file = "./" + props.image;

  const urlLink = props.source ? (
    <GridItem pl='1' area={'url'} bg='white' color='blue.800'>
      <Text>See:  <Link href={props.source} isExternal color='teal.500'>{props.source}</Link></Text>
    </GridItem>
  ) : null;

  const templateAreasFields = props.source ?`"header header" "icon main" "icon url" "icon footer"` : `"header header" "icon main" "icon footer"`;
  const templateAreasRows = props.source ? '28px 1fr 28px 28px' : '28px 1fr 28px';

  return <motion.div
    whileHover={{ scale: 1.06 }}
    transition={{ type: 'spring', stiffness: 30 }}
  >
    <Grid
        templateAreas={templateAreasFields}
        gridTemplateRows={templateAreasRows} 
        gridTemplateColumns={'90px 1fr'}
        gap='1'
        border={'1px'}
      >
      <GridItem pl='2' bg='blue.800' area={'header'}>
        <Heading as={heading_type} size={heading_size}>{props.title}</Heading>
      </GridItem>
      <GridItem pl='2' area={'icon'}>
        <Image src={file} borderRadius='lg' boxSize={"80px"} />
      </GridItem>
      <GridItem pl='1' area={'main'}>
        <Text>{props.description}</Text>
      </GridItem>
      {urlLink}
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
            <IconSection title={technology.title} image={"./" + technology.image} description={technology.description} footer={technology.footer} source={technology.source} />
          </GridItem>
        ))}
      </StandardGrid>  
  </FullScreenSection>

};

export const TechnologiesSection = withFullScreen(TechnologiesFromFile);

