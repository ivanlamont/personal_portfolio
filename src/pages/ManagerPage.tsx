import React from "react";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";
import { GridItem, Heading, Text, Flex } from "@chakra-ui/react";
import FullScreenSection, { StandardGrid } from "../components/FullScreenSection";
import withSingleSection from "../components/withSingleSection";
import ContentCard from "../components/ContentCard";

const ManagerEssayBox: React.FC<PageProps> = (props) => {
    return <FullScreenSection {...props} >
        <Flex>
            <StandardGrid>
                <GridItem>
                    <ContentCard>
                        <Heading>My Management Philosophy</Heading>
                        <Text marginTop={"28px"}>Managing applications developers has been compared - unfavorably - to shepherding cats.  It can certainly be a challenge - but as a cat myself, I know how to get the best out of my fellow felines.  Every cat is different, every cat deserves respect, and every cat has something incredible to offer.  The real skill in management is knowing how to get the best out of each team member.</Text>
                        <Text marginTop={"11px"}>My first team management experience was in 2003.  After building the proof-of-concept application for GoCar, the next steps were to build a team and take it to production.  I stepped from being a solo developer, to a full team lead.</Text>
                        <Text marginTop={"11px"}>Surprisingly, although the jump to management was quite a learning curve, I really enjoyed it.  With a budget of $3.6mm from an Angel Investor, I brought in a team of twelve, and built the platform up from ideas on a board, to revenue-generating real world systems, in a few short months.  </Text>
                        <Text marginTop={"11px"}>I continued to write software, alongside all the other developers.  I like to lead from the front, doing collaborative code reviews, encouraging new ideas, and making sure the team has a healthy cross-section of skillsets and specialties.</Text>
                        <Text marginTop={"11px"}>Today, my approach to managing teams is still rooted in collaboration, equality, and a deep appreciation for the collective strength that diverse perspectives bring to the table. As a seasoned programmer who has transitioned into a leadership role, I value the importance of fostering an environment where every team member feels empowered and heard.</Text>
                        <Text marginTop={"11px"}>Collaboration is the cornerstone of my management philosophy. I believe that the best solutions emerge when individuals with distinct skills and experiences unite towards a common goal. I encourage open communication and actively seek input from all team members, irrespective of their roles or seniority. Equality is not just a buzzword, but a guiding principle. I treat everyone on the team as equals, recognizing and appreciating the diverse talents they bring. By fostering an inclusive culture, I aim to create an environment where individuals are not only comfortable expressing their ideas, but also confident that their contributions are valued.</Text>
                        <Text marginTop={"11px"}>I prioritize mentorship and continuous learning. I believe in providing opportunities for skill development and growth, ensuring that each team member can reach their full potential. This philosophy not only enhances the capabilities of individuals but also strengthens the collective competence of the team.</Text>
                        <Text marginTop={"11px"}></Text>
                    </ContentCard>
                </GridItem>
            </StandardGrid>
        </Flex>
    </FullScreenSection>;
};

const EssaySection = withSingleSection(ManagerEssayBox);

const ManagerContent: React.FC<PageProps> = (props) => {
    return <>
      <EssaySection colorIndex={1} {...props}/>
    </>    
}

const ManagerPage = withMultisectionPage(ManagerContent)

export default ManagerPage;

