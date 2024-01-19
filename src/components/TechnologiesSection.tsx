import { ColorPageProps } from "../pages/ColorPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Box, Heading, Text, Image, Icon, ImageProps, Grid, GridItem } from "@chakra-ui/react";
import withFullScreen from "./withFullScreen";

const heading_type = "h3"
const heading_size = "md"

const Intro: React.FC = () => (
    <Box>
      <Heading as={heading_type} size={heading_size}>Technology Experience</Heading>
      <Text>I have used a TON of different Technologies over the course of my career so far.  If you would like to know if I have experience using something, what I did with it, and what I think of it, you've come to the right place</Text>
    </Box>
  );

type ImageSectionProps = {
  imageSource: string;
  description: string;
  title?: string;
  footer?: string;
}

const IconSection: React.FC<ImageSectionProps> = (props) => {
  const file = "./" + props.imageSource;
  
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
    <GridItem pl='2' bg='blue.300' area={'footer'}>
      {props.footer}
    </GridItem>
  </Grid>

}


const Python: React.FC = () => IconSection({title: "Python", imageSource: "python.svg", description: "I started writing Python code at home about ten years ago. I love the language, and have used it for a variety of projects, including a web scraper, a web server, and a trading system.  It's real strength is in data processing, every AI and ML library you can think of is available for it.  No matter how much I write in Python, I always feel like I'm just scratching the surface of what it can do."});
const CSharp: React.FC = () => IconSection({title: "C#", imageSource: "c-sharp.svg", description: ""});
const CPP: React.FC = () => IconSection({title: "C++", imageSource: "c-plusplus.svg", description: ""});
const Java: React.FC = () => IconSection({title: "Java", imageSource: "java.svg", description: ""});
const DotNet: React.FC = () => IconSection({title: ".NET", imageSource: "dotnet.svg", description: ""});
const DotNetCore: React.FC = () => IconSection({title: ".NET Core", imageSource: "dotnet.svg", description: ""});
const ReactJS: React.FC = () => IconSection({title: "ReactJS", imageSource: "react.svg", description: "I've used ReactJS since 2019.  It's powerful and I love the amazing results we can get with it.  Indeed, this website itself was built with it."});
const Dart: React.FC = () => IconSection({title: "Dart", imageSource: "dart.svg", description: ""});
const PowerShell: React.FC = () => IconSection({title: "Powershell", imageSource: "powershell.svg", description: ""});
const Pascal: React.FC = () => IconSection({title: "Pascal", imageSource: "pascal.svg", description: ""});
const Assembler: React.FC = () => IconSection({title: "Assembly", imageSource: "assembly.svg", description: ""});
const BASIC: React.FC = () => IconSection({title: "BASIC", imageSource: "basic.svg", description: ""});
const SQL: React.FC = () => IconSection({title: "SQL", imageSource: "sql.svg", description: ""});
const Postgres: React.FC = () => IconSection({title: "PostgreSQL", imageSource: "postgres.svg", description: ""});
const EntityFramework: React.FC = () => IconSection({title: "EntityFramework", imageSource: "entityframework.svg", description: ""});
const Geneva: React.FC = () => IconSection({title: "Geneva", imageSource: "geneva.svg", description: ""});
const Flutter: React.FC = () => IconSection({title: "Flutter", imageSource: "flutter.svg", description: ""});
const Docker: React.FC = () => IconSection({title: "Docker", imageSource: "docker.svg", description: ""});
const WSL: React.FC = () => IconSection({title: "WSL", imageSource: "wsl.svg", description: ""});
const GRPC: React.FC = () => IconSection({title: "gRPC", imageSource: "grpc.svg", description: ""});
const OAuth: React.FC = () => IconSection({title: "OAuth", imageSource: "oauth.svg", description: ""});
const Blazor: React.FC = () =>IconSection({title: "Blazor", imageSource: "blazor.svg", description: ""});
const TensorFlow: React.FC = () => IconSection({title: "Tensorflow", imageSource: "tensorflow.svg", description: ""});
const Windows: React.FC = () => IconSection({title: "Windows", imageSource: "windows.svg", description: ""});
const Linux: React.FC = () =>IconSection({title: "Linux", imageSource: "linux-tux.svg", description: ""});
const Android: React.FC = () =>IconSection({title: "Android", imageSource: "android.svg", description: ""});
const AWS: React.FC = () => IconSection({title: "AWS", imageSource: "aws.svg", description: ""});
const Azure: React.FC = () => IconSection({title: "Azure", imageSource: "azure.svg", description: ""});
const Security: React.FC = () => IconSection({title: "Systems Security", imageSource: "security.svg", description: ""});
const ObjectOrientatedDesign: React.FC = () =>IconSection({title: "Object Oriented Design", imageSource: "oop.svg", description: ""});
const TDD: React.FC = () => IconSection({title: "TDD", imageSource: "tdd.svg", description: ""});
const Normalization: React.FC = () => IconSection({title: "Normalization", imageSource: "3nf.svg", description: ""});
const AgileDevelopment: React.FC = () => IconSection({title: "Agile Development", imageSource: "agile.svg", description: ""});
              
const TechnologiesLanguagesBox: React.FC<ColorPageProps> = (props) => {
  return <FullScreenSection
    isDarkBackground
    backgroundTopColor={props.colorSet[(props.colorIndex??1)-1]}
    backgroundBottomColor={props.colorSet[props.colorIndex??1]}
  >  
      <StandardGrid>
        <Intro />
        <Python />
        <CSharp />
        <CPP />
        <Java />
        <ReactJS />
        <Dart />
        <PowerShell />
        <Pascal />
        <Assembler />
        <BASIC />
        <SQL />
      </StandardGrid>  
  </FullScreenSection>
}

const TechnologiesToolsBox: React.FC<ColorPageProps> = (props) => {
  return <FullScreenSection
    isDarkBackground
    backgroundTopColor={props.colorSet[(props.colorIndex??1)-1]}
    backgroundBottomColor={props.colorSet[props.colorIndex??1]}
  >  
      <StandardGrid>
        <Flutter />
        <Postgres />
        <TensorFlow />
        <EntityFramework /> 
        <Geneva />
        <Docker />
        <WSL />
        <GRPC />
        <OAuth />
        <Blazor />
      </StandardGrid>  
  </FullScreenSection>
}

const TechnologiesPlatformsBox: React.FC<ColorPageProps> = (props) => {
  return <FullScreenSection
    isDarkBackground
    backgroundTopColor={props.colorSet[(props.colorIndex??1)-1]}
    backgroundBottomColor={props.colorSet[props.colorIndex??1]}
  >  
      <StandardGrid>
        <AWS />
        <DotNet />
        <DotNetCore />
        <Windows />
        <Linux />
        <Android />
        <Azure />

      </StandardGrid>  
  </FullScreenSection>
}

const TechnologiesPrinciplesBox: React.FC<ColorPageProps> = (props) => {
  return <FullScreenSection
    isDarkBackground
    backgroundTopColor={props.colorSet[(props.colorIndex??1)-1]}
    backgroundBottomColor={props.colorSet[props.colorIndex??1]}
  >  
      <StandardGrid>
        <Normalization />
        <ObjectOrientatedDesign />
        <TDD />
        <AgileDevelopment />
        <Security />
      </StandardGrid>  
  </FullScreenSection>
}

export const TechnologiesLanguagesSection = withFullScreen(TechnologiesLanguagesBox);
export const TechnologiesToolsSection = withFullScreen(TechnologiesToolsBox);
export const TechnologiesPlatformsSection = withFullScreen(TechnologiesPlatformsBox);
export const TechnologiesPrinciplesSection = withFullScreen(TechnologiesPrinciplesBox);

