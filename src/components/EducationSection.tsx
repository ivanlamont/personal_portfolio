import YouTube from "react-youtube";
import React from "react";
import withFullScreen from "./withFullScreen";
import { Box, Heading, Link, VStack } from "@chakra-ui/react";


const EducationSectionBox: React.FC = () => {
 
    return <Box> 
        <Heading as="h1" id="projects-section">
            Educating Ivan
        </Heading>

        <VStack marginTop={120}>
            <Box>
                I received my primary degree from <Link href="https://www.tcd.ie/">Trinity College Dublin</Link>, in the early 1990s.  I studied <Link href="https://www.tcd.ie/scss/courses/undergraduate/computer-science/">Computer Science</Link>, which was a very small niche specialization at the time.  There were 30 in my class.  I considered staying on, after graduation, to get a Masters Degree, but there were too many lucrative jobs on offer, so I bade farewell to academia for the time being, and jumped into the world of financial services.
            </Box>
            <Box>              
                I have applied to the University of Texas at Austin, for admission to their <Link href="https://cdso.utexas.edu/msai">Masters in Artificial Intelligence</Link> course.  It looks to be one of the best courses in the world, and I am very excited about the prospect of studying there.
            </Box>
            <Box> 
                I have a number of additional Professional Qualifications including...         
            </Box>
            <Box>              
                Certified Tensorflow Developer
                AWS Certified Cloud Practitioner
            </Box>
            <Box>
                In addition, there are a few non-technical things that I am passionate about, and have Qualifications in.  Such as...              
                FAA Commercial Pilot
                FAA Instrument Rating
                California Notary Public
            </Box>
        </VStack>
    </Box>
};

const EducationSection = withFullScreen(EducationSectionBox);

export default EducationSection;

