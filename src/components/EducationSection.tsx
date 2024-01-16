import YouTube from "react-youtube";
import React from "react";
import withFullScreen from "./withFullScreen";
import { Box, Grid, GridItem, Heading, Text, Image, Link, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { ColorPageProps } from "../pages/ColorPage";


const EducationSectionBox: React.FC<ColorPageProps> = (props) => {
  return <FullScreenSection
    isDarkBackground
    backgroundTopColor={props.colorSet[(props.colorIndex ?? 1 ) - 1]}
    backgroundBottomColor={props.colorSet[props.colorIndex ?? 1]}
  >  
    <Grid
        marginTop={100}
        h='530px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={2}
        >
            <GridItem>
            <Heading as={"h1"} size={"lg"}>Educating Ivan</Heading>
            <Text>I received my primary degree from <Link href="https://www.tcd.ie/" target="_blank">Trinity College Dublin</Link>, in the early 1990s.  I studied <Link href="https://www.tcd.ie/scss/courses/undergraduate/computer-science/" target="_blank">Computer Science</Link>, which was a very small niche specialization at the time.  There were 30 in my class.  I considered staying on, after graduation, to get a Masters Degree, but there were too many lucrative jobs on offer, so I bade farewell to academia for the time being, and jumped into the world of financial services.
            </Text>
            <Image src={require("../images/trinity.jpg")} alt="Trinity College Dublin" />
            </GridItem>
            <GridItem>
                <Text>I have applied to the University of Texas at Austin, for admission to their <Link href="https://cdso.utexas.edu/msai" target="_blank">Masters in Artificial Intelligence</Link> course.  It looks to be one of the best courses in the world, and I am very excited about the prospect of studying there.
                </Text>        
                <Image src={require("../images/UT-austin.jpg")} alt="University of Texas at Austin" />
            </GridItem>
            <GridItem>
                <Text>I have a number of additional Professional Qualifications including...</Text>
            </GridItem>
            <GridItem>
                <Text>Certified Tensorflow Developer</Text>
                <Image src={require("../images/tensorflow-cert.png")} alt="Tensorflow Developer Certification" />
            </GridItem>
            <GridItem>
                <Text>AWS Certified Cloud Practitioner</Text>
                <Image src={require("../images/AWS_certification.png")} alt="AWS Certified Cloud Practitioner" />
            </GridItem>
            <GridItem>
                <Text>                In addition, there are a few non-technical things that I am passionate about, and have Qualifications in.  Such as...              
                        FAA Commercial Pilot
                        FAA Instrument Rating
                        California Notary Public</Text>        
            </GridItem>
        </Grid>
    </FullScreenSection>;

};

const EducationSection = withFullScreen(EducationSectionBox);

export default EducationSection;

