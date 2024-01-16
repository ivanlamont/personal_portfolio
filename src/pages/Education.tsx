import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import EducationSection from "../components/EducationSection";

const EducationContent: React.FC<ColorPageProps> = (props) => {
    return <>
      <EducationSection colors={props.colorSet} colorIndex={props.colorIndex?? 1} {...props}/>
    </>    
}

const Education = withColorPage(EducationContent)

export default Education;

