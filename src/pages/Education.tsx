import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import EducationSection from "../components/EducationSection";

const EducationContent: React.FC<ColorPageProps> = (props) => {
    return <>
      <EducationSection  colors={props.colorSet} colorIndex={1}/>
    </>    
}

const Education = withColorPage(EducationContent)

export default Education;

