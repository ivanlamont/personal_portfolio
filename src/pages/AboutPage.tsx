import React from "react";
import AboutSection from "../components/AboutSection";
import withColorPage, { ColorPageProps } from "./ColorPage";

const AboutContent: React.FC<ColorPageProps> = (props) => {
    return <AboutSection colors={props.colorSet} colorIndex={1} />;
}

const AboutPage = withColorPage(AboutContent)

export default AboutPage;
