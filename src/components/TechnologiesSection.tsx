import withMultisectionPage, { PageProps } from "../pages/MultiSectionPage";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { Heading, Text, Image, Grid, GridItem, Link  } from "@chakra-ui/react";
import { SingleTechBoxProps, SingleTechBox } from "./SingleTechBox";
import axios from "axios";
import { useState, useEffect } from "react";

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
          return <> {Object.entries(techList).map((section) => (<Component {...props} sectionName={section[0]} data={section[1]}  colorIndex={i++} />))}  </>
        }
    }
}

const TechnologiesContent: React.FC<TechnologiesProps & PageProps & FileSectionProps> = (props) => { 
  const techData = props as FileSectionProps
  return <FullScreenSection {...props} >
      <StandardGrid>
      {techData.data.map((technology) => (
          <GridItem>
            <SingleTechBox {...technology} image={"./" + technology.image} />
          </GridItem>
        ))}
      </StandardGrid>  
  </FullScreenSection>
};

const Technologies = withMultisectionPage(withJsonSource(TechnologiesContent))

export default Technologies;



