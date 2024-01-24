import React from "react";
import AboutSection from "../components/AboutSection";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";
import { SingleSectionProps } from "../components/withSingleSection";

const AboutContent: React.FC<PageProps> = (props) => {
    return <AboutSection {...props} />;
}

const AboutPage = withMultisectionPage(AboutContent)

export default AboutPage;
