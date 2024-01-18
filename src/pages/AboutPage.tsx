import React from "react";
import AboutSection from "../components/AboutSection";
import withColorPage, { ColorPageProps } from "./ColorPage";

const AboutContent: React.FC<ColorPageProps> = (props) => {
    return <AboutSection {...props}/>;
}

const AboutPage = withColorPage(AboutContent)

export default AboutPage;
