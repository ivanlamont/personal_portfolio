import React from "react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import { GridItem, Heading, Text } from "@chakra-ui/react";
import FullScreenSection, { StandardGrid } from "../components/FullScreenSection";
import withFullScreen from "../components/withFullScreen";

const ManagerEssayBox: React.FC<ColorPageProps> = (props) => {
    return <FullScreenSection
        isDarkBackground
        backgroundTopColor={props.colorSet[(props.colorIndex ?? 1 ) - 1]}
        backgroundBottomColor={props.colorSet[props.colorIndex ?? 1]}
    >  
        <StandardGrid>
            <GridItem>
                <Heading>My Management Philosophy</Heading>
                <Text marginTop={"11px"}>Managing developers has been compared - unfavorably - to shepherding cats.  It can be a challenge - but as a cat myself, I know how to get the best out of my fellow felines.</Text>
                <Text marginTop={"11px"}>In the realm of software development, my approach to managing teams is rooted in collaboration, equality, and a deep appreciation for the collective strength that diverse perspectives bring to the table. As a seasoned programmer who has transitioned into a leadership role, I have come to value the importance of fostering an environment where every team member feels empowered and heard.</Text>
                <Text marginTop={"11px"}>Collaboration is the cornerstone of my management philosophy. I believe that the best solutions emerge when individuals with distinct skills and experiences unite towards a common goal. I encourage open communication and actively seek input from all team members, irrespective of their roles or seniority. In my view, each member brings a unique set of skills that, when harmonized, contribute to the overall success of the project.</Text>
                <Text marginTop={"11px"}>Equality is not just a buzzword but a guiding principle in my management style. I treat everyone on the team as equals, recognizing and appreciating the diverse talents they bring. By fostering an inclusive culture, I aim to create an environment where individuals are not only comfortable expressing their ideas but also confident that their contributions are valued.</Text>
                <Text marginTop={"11px"}>In managing teams, I prioritize mentorship and continuous learning. I believe in providing opportunities for skill development and growth, ensuring that each team member can reach their full potential. This philosophy not only enhances the capabilities of individuals but also strengthens the collective competence of the team.</Text>
                <Text marginTop={"11px"}>In conclusion, my management philosophy revolves around collaboration, equality, and continuous learning. By embracing these principles, I strive to lead teams that are not only high-performing but also inclusive and adaptive in the dynamic world of software development.</Text>
            </GridItem>
        </StandardGrid>
    </FullScreenSection>;
};

const EssaySection = withFullScreen(ManagerEssayBox);

const ManagerContent: React.FC<ColorPageProps> = (props) => {
    return <>
      <EssaySection colors={props.colorSet} colorIndex={props.colorIndex?? 1} {...props}/>
    </>    
}

const ManagerPage = withColorPage(ManagerContent)

export default ManagerPage;

