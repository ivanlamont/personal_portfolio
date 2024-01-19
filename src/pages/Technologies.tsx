import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import { TechnologiesLanguagesSection, TechnologiesToolsSection, TechnologiesPlatformsSection, TechnologiesPrinciplesSection } from "../components/TechnologiesSection";

const TechnologiesContent: React.FC<ColorPageProps> = (props) => {
    return <>
        <TechnologiesLanguagesSection colors={props.colorSet} {...props} colorIndex={props.colorIndex ?? 1} />
        <TechnologiesToolsSection colors={props.colorSet} {...props} colorIndex={props.colorIndex ?? 2}/>
        <TechnologiesPlatformsSection colors={props.colorSet} {...props} colorIndex={props.colorIndex ?? 3} />
        <TechnologiesPrinciplesSection colors={props.colorSet} {...props} colorIndex={props.colorIndex ?? 4}/>
    </>
}

const Technologies = withColorPage(TechnologiesContent)

export default Technologies;
