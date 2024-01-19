import { ColorPageProps } from "../pages/ColorPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Heading, Text, Image, Grid, GridItem  } from "@chakra-ui/react";
import withFullScreen from "./withFullScreen";

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
  
  return <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'28px 1fr 30px'}
      gridTemplateColumns={'90px 1fr'}
      gap='1'
      border={'1px'}
    >
    <GridItem pl='2' bg='blue.800' area={'header'}>
      <Heading as={heading_type} size={heading_size}>{props.title}</Heading>
    </GridItem>
    <GridItem pl='2' area={'nav'}>
      <Image src={file} borderRadius='lg' boxSize={"80px"} />
    </GridItem>
    <GridItem pl='1' area={'main'}>
      <Text>{props.description}</Text>
    </GridItem>
    <GridItem pl='2' bg='blue.600' area={'footer'}>
      <Text>Verdict: {props.footer}</Text>
    </GridItem>
  </Grid>

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
            <IconSection title={technology.title} image={"./" + technology.image} description={technology.description} footer={technology.footer} />
          </GridItem>
        ))}
      </StandardGrid>  
  </FullScreenSection>

};

export const TechnologiesSection = withFullScreen(TechnologiesFromFile);

