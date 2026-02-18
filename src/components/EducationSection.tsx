import React from "react";
import withSingleSection, { SingleSectionProps } from "./withSingleSection";
import { Box, Grid, GridItem, Heading, Text, Image, Link, VStack } from "@chakra-ui/react";
import FullScreenSection, { StandardGrid } from "./FullScreenSection";
import { PageProps } from "../pages/MultiSectionPage";
import { ResponsiveImage } from "./ResponsiveMedia";

const EducationSectionTopBox: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >  
        <StandardGrid>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Heading as={"h1"} size={"lg"}>Educating Ivan</Heading>
            </GridItem>
            <GridItem>
            <Text>I received my primary degree and my Masters from <Link href="https://www.tcd.ie/" target="_blank">Trinity College Dublin</Link>, in the early 1990s.  I studied <Link href="https://www.tcd.ie/scss/courses/undergraduate/computer-science/" target="_blank">Computer Science</Link>, which was a very small niche specialization at the time.  There were 30 in my class.  I considered staying on, to do a PhD, but there were too many lucrative jobs on offer, so I bade farewell to academia for the time being, and jumped into the world of financial services.
            </Text>
            <ResponsiveImage src={require("../images/trinity.jpg")} alt="Trinity College Dublin" />
            </GridItem>

        </StandardGrid>
    </FullScreenSection>;
};

const EducationSectionProfessionalQualificationsBox: React.FC<PageProps | SingleSectionProps> = (props: PageProps | SingleSectionProps) => {
    return <FullScreenSection {...props} >
        <StandardGrid>
            <GridItem>
                <Text>Certified Tensorflow Developer</Text>
                <ResponsiveImage src={require("../images/tensorflow-cert.png")} alt="Tensorflow Developer Certification" />
            </GridItem>
            <GridItem>
                <Text>AWS Certified Cloud Practitioner</Text>
                <ResponsiveImage src={require("../images/AWS_certification.png")} alt="AWS Certified Cloud Practitioner" />
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
                <Text>In addition, there are a few non-technical things that I am passionate about, and have Qualifications in.  Such as...              
                </Text>        
            </GridItem>
            <GridItem>
                <Text>FAA Commercial Pilot / Instrument Rating</Text>
                <ResponsiveImage src={"faa.jpg"} alt="FAA Commercial Pilot" maxH={"300px"} />
            </GridItem>
            <GridItem>
                <Text>California Notary Public</Text>
                <ResponsiveImage src={"./notary.jpg"} alt="Notary" maxH={"300px"} />
            </GridItem>
        </Grid>
    </FullScreenSection>;
};
    
export const EducationSection = withSingleSection(EducationSectionTopBox);
export const EducationSectionPro = withSingleSection(EducationSectionProfessionalQualificationsBox);
export const EducationSectionNonTechnical = withSingleSection(EducationSectionNonTechnicalQualificationsBox);

export default EducationSection;


