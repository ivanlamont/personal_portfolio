import React from "react";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";
import EducationSection, { EducationSectionPro, EducationSectionNonTechnical } from "../components/EducationSection";

const EducationContent: React.FC<PageProps> = (props) => {
    return <>
      <EducationSection colorIndex={1} {...props}/>
      <EducationSectionPro colorIndex={2} {...props}/>
      <EducationSectionNonTechnical colorIndex={3} {...props}/>
    </>    
}

const Education = withMultisectionPage(EducationContent)

export default Education;

