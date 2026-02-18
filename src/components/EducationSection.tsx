import React from "react";
import withSingleSection, { SingleSectionProps } from "./withSingleSection";
import { Box, Grid, GridItem, Heading, Text, Image, VStack } from "@chakra-ui/react";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { PageProps } from "../pages/MultiSectionPage";
import { ResponsiveImage } from "./ResponsiveMedia";
import { Flink } from "./Flink";
import ContentCard from "./ContentCard";

const EducationSectionTopBox: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >  
        <StandardGrid>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <ContentCard>
                <Heading as={"h1"} size={"lg"}>Educating Ivan</Heading>
              </ContentCard>
            </GridItem>
            <GridItem>
              <ContentCard>
                <Text>I received my primary degree and my Masters from <Flink url="https://www.tcd.ie/" text="Trinity College Dublin" />, in the early 1990s. I studied <Flink url="https://www.tcd.ie/scss/courses/undergraduate/computer-science/" text="Computer Science" />, which was a very small niche specialization at the time. There were 30 in my class. I considered staying on, to do a PhD, but there were too many lucrative jobs on offer, so I bade farewell to academia for the time being, and jumped into the world of financial services.
                </Text>
                <ResponsiveImage maxW={{ base: "16rem", md: "22rem" }} mx="auto" src={require("../images/trinity.jpg")} alt="Trinity College Dublin" />
              </ContentCard>
            </GridItem>

        </StandardGrid>
    </FullScreenSection>;
};

const EducationSectionProfessionalQualificationsBox: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >
        <StandardGrid>
            <GridItem>
                <ContentCard>
                  <Text>Certified Tensorflow Developer</Text>
                  <ResponsiveImage maxW={{ base: "16rem", md: "22rem" }} mx="auto" src={require("../images/tensorflow-cert.png")} alt="Tensorflow Developer Certification" />
                </ContentCard>
            </GridItem>
            <GridItem>
                <ContentCard>
                  <Text>AWS Certified Cloud Practitioner</Text>
                  <ResponsiveImage maxW={{ base: "16rem", md: "22rem" }} mx="auto" src={require("../images/AWS_certification.png")} alt="AWS Certified Cloud Practitioner" />
                </ContentCard>
            </GridItem>
        </StandardGrid>
    </FullScreenSection>;
};

const EducationSectionNonTechnicalQualificationsBox: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >
        <Grid
            w="100%"
            templateColumns="1fr"
            gap={{ base: 4, md: 6 }}
            alignItems="start"
        >
            <GridItem>
                <ContentCard>
                  <Text>In addition, there are a few non-technical things that I am passionate about, and have Qualifications in.  Such as...              
                  </Text>
                </ContentCard>
            </GridItem>
            <GridItem>
                <ContentCard>
                  <Text>FAA Commercial Pilot / Instrument Rating</Text>
                  <ResponsiveImage src={"faa.jpg"} alt="FAA Commercial Pilot" maxW={{ base: "16rem", md: "22rem" }} mx="auto" />
                </ContentCard>
            </GridItem>
            <GridItem>
                <ContentCard>
                  <Text>California Notary Public</Text>
                  <ResponsiveImage src={"./notary.jpg"} alt="Notary" maxW={{ base: "16rem", md: "22rem" }} mx="auto" />
                </ContentCard>
            </GridItem>
        </Grid>
    </FullScreenSection>;
};
    
export const EducationSection = withSingleSection(EducationSectionTopBox);
export const EducationSectionPro = withSingleSection(EducationSectionProfessionalQualificationsBox);
export const EducationSectionNonTechnical = withSingleSection(EducationSectionNonTechnicalQualificationsBox);

export default EducationSection;


