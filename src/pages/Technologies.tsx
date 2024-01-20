import React, { useEffect, useState } from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import { TechnologiesSection } from "../components/TechnologiesSection";
import { Heading } from "@chakra-ui/react";
import axios from "axios";

const technologies_json = './tech.json'

export const TechnologiesContent: React.FC<ColorPageProps> = (props) => {
  
    const [techList, setTechList] = useState<[]>([]);
  
    useEffect(() => {
      axios
      .get(technologies_json)
      .then((result) => setTechList(result.data))
      .catch(err=>console.log('tech load error=>',err))
    },[]);
  
    if (techList.length == 0)
      return <Heading>Loading...</Heading>
    else {
      var i = 1;
      return <> {Object.entries(techList).map((section) => (<TechnologiesSection colors={props.colorSet} sectionName={section[0]} data={section[1]} colorSet={props.colorSet} colorIndex={i++}  />))}  </>
    }
  
  };

const Technologies = withColorPage(TechnologiesContent)

export default Technologies;
