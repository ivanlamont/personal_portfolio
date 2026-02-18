import { Box, GridItem, Heading, ListItem, SimpleGrid, Text, UnorderedList, VStack } from "@chakra-ui/react";
import withMultisectionPage, { PageProps } from "./MultiSectionPage";
import FullScreenSection, { StandardGrid } from "../components/FullScreenSection";
import { SingleSectionProps } from "../components/withSingleSection";
import { ResponsiveImage } from "../components/ResponsiveMedia";
import { Flink } from "../components/Flink";
import ContentCard from "../components/ContentCard";

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
      <ContentCard>
        <StoryBlock title="Making Computers Easier to Use">
          I have always wanted computers to be easier for people to use. When I was growing up,
          the setup and learning curve were severe, and that complexity kept many smart people away
          from technology despite its potential.
        </StoryBlock>
      </ContentCard>
    </GridItem>
    <GridItem>
      <ContentCard>
        <StoryBlock title="Voice-First Experiments">
          In the early 2010s I experimented with text-to-speech, speech recognition, and
          bidirectional audio to build a basic air-traffic-control simulator and a voice-driven
          trading assistant. The hardest problem was preventing feedback loops while the system was
          speaking and listening at nearly the same time. I explored filtering strategies using{" "}
          <Flink url="https://en.wikipedia.org/wiki/Fast_Fourier_transform" text="FFT" />
          , but performance limitations at the time made the solution impractical.
        </StoryBlock>
      </ContentCard>
    </GridItem>
    <GridItem>
      <ContentCard>
        <StoryBlock title="Early AI Foundations">
          I first got interested in AI during my studies at{" "}
          <Flink url="https://www.tcd.ie/" text="Trinity" />
          , where we looked at classic chat systems such as{" "}
          <Flink url="https://en.wikipedia.org/wiki/ELIZA" text="ELIZA" />{" "}
          and the idea of systems that could pass a{" "}
          <Flink url="https://en.wikipedia.org/wiki/Turing_test" text="Turing test" />
          .
        </StoryBlock>
      </ContentCard>
    </GridItem>
  </StandardGrid>
</FullScreenSection>;

}

const AIContentNext: React.FC<PageProps & SingleSectionProps> = (props) => {
  return <FullScreenSection {...props} >
  <StandardGrid>
    <GridItem>
      <ContentCard>
        <VStack alignItems="stretch" spacing={5}>
          <StoryBlock title="AI in Software Development">        
            Artificial intelligence has completely changed the way we design and build applications. 
    We have recently passed an inflection point where LLMs can easily match a requirements document with industry best practices, and create in hours a system that only a year or two ago would have taken months to craft. 
          </StoryBlock>
          <StoryBlock title="Code as A Craft">        
            The craft of writing code line by line by hand has now largely been consigned to the history books. Modern tools like Claude Code and Codex are so powerful, they can generate high-quality code from natural language descriptions, and they can also understand and modify existing codebases with ease.
            Where does that leave the programmer who has built his career and reputation upon writing quality code? Well, the focus now shifts to writing quality specifications, curating the best applications and architecture built in the blink of an eye by the ever-evolving tools. 
          </StoryBlock>
          <StoryBlock title="Call Center Automation">        
            One project that I recently completed was a full-scale replacement of a call center with an AI-driven solution, Powered by <Flink url="https://www.twilio.com/" text="Twilio" />, <Flink url="https://www.elevenlabs.com/" text="ElevenLabs" />, <Flink url="https://www.nmigateway.com/" text="NMI Gateway" /> and <Flink url="https://www.orderlogix.com/" text="OrderLogix" />, and hosted on <Flink url="https://aws.amazon.com/fargate/" text="AWS Fargate" />.
            This system is now in production, and the LLM agent also acts as a chat bot on the e-commerce sites designed and built for the client in both Shopify and <Flink url="https://www.austinherbalsciences.com/" text="BigCommerce" />.
          </StoryBlock>
          <Box>
            <Heading as="h3" size="md" mb={3}>
              AI Air Traffic Control
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} alignItems="start">
              <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
                Recently, whilst sitting in the back of an airplane waiting to take off, the thought occurred to me that the job of an air traffic controller is one that&apos;s really rather easily modeled.
                In a dark room a few miles away, in the terminal radio air, in the TRACON center, there are a number of agents who are responsible for keeping the planes separated, and for giving them instructions on when to take off, when to land, and how to get from point A to point B.
                Essentially, they just speak to the screen, and the dots speak back and move according to their instructions. This seemed like a perfect use case for training a machine learning agent to direct the dots across the screen.
                Just for fun, I built a system using PPO (Proximal Policy Optimization), and trained it on a curriculum I designed, which essentially models the physics and then the laws and regulations of air traffic control.
                It turns out the hard part is building the model of aircraft, airports, approaches, and the weather...
                Once that was done, the idea came to me that it would be fun to have a human compete against the AI and see who could do the job better. Within a day or so, we had <Flink url="https://approachcontroller.com" text="Approach Controller" /> up and running.
                All the source for this one is on <Flink url="https://github.com/ivanlamont/AI-ATC" text="Github" /> if you&apos;d like to check it out.
              </Text>
              <ResponsiveImage
                src={require("../images/approachcontroller.png")}
                alt="Approach Controller screenshot"
                maxW={{ base: "16rem", md: "20rem" }}
                mx="auto"
              />
            </SimpleGrid>
          </Box>
          <StoryBlock title="InvestrLot">
            In the financial services domain, I designed and built the InvestrLot Portfolio Accounting Platform from the ground up.  This is a lightning-fast, fully featured portfolio accounting platform built using .NET 10 with full auditability.  It is designed to be used by hedge funds, family offices, and registered investment advisors.  
            The system is built on a microservices architecture, available for deployment in AWS, Azure, GCP or on-prem. 
            The system is hosted on AWS, and it uses a variety of AWS services including Lambda, S3, and RDS.  The system is also designed to be easily extensible, with a plugin architecture that allows for easy integration with third-party services.
          </StoryBlock>
          <StoryBlock title="...And Lots More to Come!">        
            This is just the beginning.  There are two projects in the works, still under wraps, which I hope will see the light of day soon. I promise they will put a lot of smiles on a lot of faces. Stay tuned!
          </StoryBlock>
        </VStack>
      </ContentCard>
    </GridItem>
    <GridItem>
      <ContentCard>
        <VStack alignItems="stretch" spacing={4}>
          <StoryBlock title="Applied Machine Learning">
            Back in 2023 I earned the TensorFlow developer certification, and I have been working on AI connected projects ever since. 
          </StoryBlock>
          <ResponsiveImage
            src={require("../images/tensorflow-cert.png")}
            alt="Tensorflow Developer Certification"
            maxW={{ base: "16rem", md: "20rem" }}
            mx="auto"
          />
          <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
            Certification work included model design and training, hyperparameter tuning, and neural
            network optimization techniques.  All this work seemed very advanced at the time. Now, just three years later, much of what I've learned is kind of quaint!
          </Text>
        </VStack>
      </ContentCard>
    </GridItem>
  </StandardGrid>
</FullScreenSection>;

}

const AIContentTrading: React.FC<PageProps & SingleSectionProps> = (props) => {
  return <FullScreenSection {...props} >
  <StandardGrid>
    <GridItem colSpan={{ base: 1, lg: 2 }}>
      <ContentCard>
        <Heading as="h2" size="md">
          AI in Financial Services
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="tall" mt={3}>
          Financial services continues to be one of the fastest-moving AI domains. I have been
          applying ideas from <i>Machine Learning for Algorithmic Trading</i> by Stefan Jansen, and
          it has had a major impact on how I approach model design and evaluation in real trading
          contexts.
          The third edition is about to come out, and it's absolutely magnificent! Check out <Flink url="https://github.com/ml4t/data" text="this repo" /> and do give it a star! Well worth it!
        </Text>
        <Box mt={3}>
          <UnorderedList spacing={2} fontSize={{ base: "sm", md: "md" }}>
            <ListItem>Feature engineering for noisy market data</ListItem>
            <ListItem>Model validation that minimizes overfitting risk</ListItem>
            <ListItem>Practical deployment thinking for live systems</ListItem>
          </UnorderedList>
        </Box>
        <ResponsiveImage
          src={require("../images/ML4T-book.jpg")}
          alt="Machine Learning for Algorithmic Trading"
          maxW={{ base: "15rem", md: "19rem" }}
          mx="auto"
        />
      </ContentCard>
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
