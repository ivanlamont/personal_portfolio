import React from "react";
import TechnologiesSection from "../components/TechnologiesSection";
import withColorPage, { ColorPageProps } from "./ColorPage";

const TechnologiesContent: React.FC<ColorPageProps> = (props) => {
    return <TechnologiesSection colors={props.colorSet} colorIndex={props.colorIndex ?? 1} />;
}

const Technologies = withColorPage(TechnologiesContent)

export default Technologies;
