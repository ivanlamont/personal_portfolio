import { Box, GridItem, Heading, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";
import FullScreenSection, { StandardGrid } from "../components/FullScreenSection";
import { SingleSectionProps } from "../components/withSingleSection";
import { ResponsiveImage } from "../components/ResponsiveMedia";

type StoryBlockProps = {
  title?: string;
  children: React.ReactNode;
};

const StoryBlock: React.FC<StoryBlockProps> = ({ title, children }) => (
  <VStack alignItems="stretch" spacing={3}>
    {title ? (
      <Heading as="h3" size="md">
        {title}
      </Heading>
    ) : null}
    <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
      {children}
    </Text>
  </VStack>
);

const AIContentIntro: React.FC<PageProps & SingleSectionProps> = (props) => {
  return <FullScreenSection {...props} > 
  <StandardGrid>
    <GridItem colSpan={{ base: 1, lg: 2 }}>
      <Heading as={"h1"} size={"lg"}>Artificial Intelligence</Heading>
    </GridItem>
    <GridItem>
      <StoryBlock title="Making Computers Easier to Use">
        I have always wanted computers to be easier for people to use. When I was growing up,
        the setup and learning curve were severe, and that complexity kept many smart people away
        from technology despite its potential.
      </StoryBlock>
    </GridItem>
    <GridItem>
      <StoryBlock title="Voice-First Experiments">
        In the early 2010s I experimented with text-to-speech, speech recognition, and
        bidirectional audio to build a basic air-traffic-control simulator and a voice-driven
        trading assistant. The hardest problem was preventing feedback loops while the system was
        speaking and listening at nearly the same time. I explored filtering strategies using{" "}
        <Link href="https://en.wikipedia.org/wiki/Fast_Fourier_transform" target="_blank">
          FFT
        </Link>
        , but performance limitations at the time made the solution impractical.
      </StoryBlock>
    </GridItem>
    <GridItem>
      <StoryBlock title="Early AI Foundations">
        I first got interested in AI during my studies at{" "}
        <Link href="https://www.tcd.ie/" target="_blank">
          Trinity
        </Link>
        , where we looked at classic chat systems such as{" "}
        <Link href="https://en.wikipedia.org/wiki/ELIZA" target="_blank">
          ELIZA
        </Link>{" "}
        and the idea of systems that could pass a{" "}
        <Link href="https://en.wikipedia.org/wiki/Turing_test" target="_blank">
          Turing test
        </Link>
        .
      </StoryBlock>
    </GridItem>
  </StandardGrid>
</FullScreenSection>;

}

const AIContentNext: React.FC<PageProps & SingleSectionProps> = (props) => {
  return <FullScreenSection {...props} >
  <StandardGrid>
    <GridItem>
      <StoryBlock title="Academic Direction">
        My next major challenge is pursuing a Master&apos;s degree in AI through the University
        of Texas at Austin.
      </StoryBlock>
      <ResponsiveImage src={require("../images/UT-austin.jpg")} alt="University of Texas at Austin" />
    </GridItem>
    <GridItem>
      <StoryBlock title="Applied Machine Learning">
        I have been actively working across modern machine-learning workflows and recently earned
        TensorFlow developer certification.
      </StoryBlock>
      <ResponsiveImage src={require("../images/tensorflow-cert.png")} alt="Tensorflow Developer Certification" />
      <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
        Certification work included model design and training, hyperparameter tuning, and neural
        network optimization techniques.
      </Text>
    </GridItem>
  </StandardGrid>
</FullScreenSection>;

}

const AIContentTrading: React.FC<PageProps & SingleSectionProps> = (props) => {
  return <FullScreenSection {...props} >
  <StandardGrid>
    <GridItem colSpan={{ base: 1, lg: 2 }}>
      <Heading as="h2" size="md">
        AI in Financial Services
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall" mt={3}>
        Financial services continues to be one of the fastest-moving AI domains. I have been
        applying ideas from <i>Machine Learning for Algorithmic Trading</i> by Stefan Jansen, and
        it has had a major impact on how I approach model design and evaluation in real trading
        contexts.
      </Text>
      <Box mt={3}>
        <UnorderedList spacing={2} fontSize={{ base: "sm", md: "md" }}>
          <ListItem>Feature engineering for noisy market data</ListItem>
          <ListItem>Model validation that minimizes overfitting risk</ListItem>
          <ListItem>Practical deployment thinking for live systems</ListItem>
        </UnorderedList>
      </Box>
    </GridItem>
    <GridItem>
      <ResponsiveImage src={require("../images/ML4T-book.jpg")} alt="Machine Learning for Algorithmic Trading" />
    </GridItem>
  </StandardGrid>
</FullScreenSection>;

}

const AIContent: React.FC<PageProps> = (props) => {

  return <VStack w="100%" spacing={{ base: 8, md: 10 }}>
    <AIContentIntro  {...props} colorIndex={1}/>
    <AIContentNext  {...props} colorIndex={2}/>
    <AIContentTrading  {...props} colorIndex={3} />
  </VStack>    
}

const ArtificialIntelligence = withMultisectionPage(AIContent);

export default ArtificialIntelligence;
