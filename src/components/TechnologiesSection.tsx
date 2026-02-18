import withMultisectionPage, { PageProps } from "../pages/MultiSectionPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { GridItem, Heading, VStack } from "@chakra-ui/react";
import { SingleTechBoxProps, SingleTechBox } from "./SingleTechBox";
import axios from "axios";
import { useState, useEffect } from "react";
import { layoutTokens } from "../theme";

export type FileSectionProps = {
  sectionName: string;
  data: SingleTechBoxProps[];
}

export type TechnologiesProps = {
  sourceFile: string
}

function withJsonSource<P>(Component: React.ComponentType<P & FileSectionProps>) {
    return  (props: P & TechnologiesProps & PageProps) => {
        const [techList, setTechList] = useState<[]>([]);
  
        useEffect(() => {
          axios
          .get(props.sourceFile)
          .then((result) => setTechList(result.data))
          .catch(err=>console.log('tech load error=>',err))
        },[]);
      
        if (techList.length == 0)
          return <Heading>Loading...</Heading>
        else {
          var i = 1;
          return (
            <VStack
              w="100%"
              maxW={layoutTokens.sectionMaxW}
              mx="auto"
              px={layoutTokens.sectionPaddingX}
              pt={layoutTokens.sectionPaddingTop}
              pb={layoutTokens.sectionPaddingBottom}
              spacing={{ base: 6, md: 8 }}
              alignItems="stretch"
            >
              {Object.entries(techList).map((section) => (
                <Component key={section[0]} {...props} sectionName={section[0]} data={section[1]} colorIndex={i++} />
              ))}
            </VStack>
          )
        }
    }
}

const TechnologiesContent: React.FC<TechnologiesProps & PageProps & FileSectionProps> = (props) => { 
  const techData = props as FileSectionProps
  return <VStack w="100%">
    <FullScreenSection {...props}>
        <StandardGrid>
        {techData.data.map((technology) => (
            <GridItem key={`${techData.sectionName}-${technology.title ?? technology.image}`}>
              <SingleTechBox {...technology} image={"./" + technology.image} />
            </GridItem>
          ))}
        </StandardGrid>  
    </FullScreenSection>
  </VStack> 
};

const Technologies = withMultisectionPage(withJsonSource(TechnologiesContent))

export default Technologies;



