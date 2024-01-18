import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import EducationSection, { EducationSectionPro, EducationSectionNonTechnical } from "../components/EducationSection";

const EducationContent: React.FC<ColorPageProps> = (props) => {
    return <>
      <EducationSection colors={props.colorSet} colorIndex={props.colorIndex?? 1} {...props}/>
      <EducationSectionPro colors={props.colorSet} colorIndex={props.colorIndex?? 2} {...props}/>
      <EducationSectionNonTechnical colors={props.colorSet} colorIndex={props.colorIndex?? 3} {...props}/>
    </>    
}

const Education = withColorPage(EducationContent)

export default Education;

