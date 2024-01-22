import React, { useEffect, useState } from "react";
import { TechnologiesFromFile } from "../components/TechnologiesSection";
import { Heading } from "@chakra-ui/react";
import axios from "axios";
import withColorPage, { ColorPageProps } from "../pages/ColorPage";

export type TechnologiesProps = {
  sourceFile: string
}

function withJsonSource<P>(Component: React.ComponentType<P>) {
    return  (props: P & TechnologiesProps & ColorPageProps) => {
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

const TechnologiesContent: React.FC<TechnologiesProps & ColorPageProps> = (props) => { 
    return <TechnologiesFromFile colorIndex={1} sectionName={""} data={[]} {...props}   />  
};

const Technologies = withColorPage(withJsonSource(TechnologiesContent))

export default Technologies;
