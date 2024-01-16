import { Heading, Grid, GridItem, Link, Text, Image } from "@chakra-ui/react";
import withColorPage, { ColorPageProps } from "./ColorPage";
import FullScreenSection from "../components/FullScreenSection";

const AIContent: React.FC<ColorPageProps> = (props) => {
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
      <Heading as={"h1"} size={"lg"}>Artificial Intelligence</Heading>
      <Text>I have always wished computers were easier to use.  When I was growing up, they were very hard to use, the amount of acquired knowledge required to get started was obscene.  Think CONFIG.SYS and AUTOEXEC.  If you don’t know what I’m talking about – you’re lucky.  I knew how powerful they were, but the learning curve was so steep, it became a barrier to entry for many, many smart people.</Text>
    </GridItem>
    <GridItem>
        <Text>Fast forward to the early 2010s.  I was playing around with text-to-speech and speech recognition engines, bi-directional audio…. I used it to build a basic air-traffic-control simulator.  Then I built a primitive stock-market trader assistant that would place orders in my trading account using voice commands alone.  I saw the potential for making a device that really made computers easier to use, by removing the keyboard and screen entirely, and using human interfaces instead.  The real challenge with the technology I was playing with – that I found I could not solve alone – was getting the system to stop listening when it was speaking back to me.  The speech recognition engines didn’t like having the microphone turned on and off that quickly, and I often ended up with a feedback loop.  I think the solution here was to apply a FFT filter to the input waveform, before passing to the speech recognition engine, to filter out what the machine was already saying (which it already had in wave format).  But that <Link href="https://en.wikipedia.org/wiki/Fast_Fourier_transform"  target="_blank">FFT</Link> library proved too slow for me, and before I knew it, Apple and Amazon had produced Siri and Alexa, and the ingenuity factor began to fade.</Text>        
    </GridItem>
    <GridItem>
        <Text>I had really enjoyed the very primitive Artificial Intelligence research that was around at the time I was in college in <Link href="https://www.tcd.ie/" target="_blank">Trinity</Link>.  Basic chat engines, like <Link href="https://en.wikipedia.org/wiki/ELIZA" target="_blank">Eliza</Link>, mostly written in LISP.  Most of us thought that the holy grail in AI research was to write something that could pass a <Link href="https://en.wikipedia.org/wiki/Turing_test">Turing test.</Link></Text>
    </GridItem>
    <GridItem>
        <Text>Today, my next challenge will be getting my Masters Degree in AI, through the University of Texas at Austin.  I have been diving into the broad field of AI and machine learning, I recently got certified as a Tensorflow developer.</Text>
        <Image src={require("../images/UT-austin.jpg")} alt="University of Texas at Austin" />
    </GridItem>
    <GridItem>
        <Text>The exams for this included building and training models, improving learning rates within neural networks, and so many more technical ideas.</Text>
        <Image src={require("../images/tensorflow-cert.png")} alt="Tensorflow Developer Certification" />
    </GridItem>
    <GridItem>
        <Text>One area that is seeing an explosion in AI use, is of course financial services.  Algorithmic trading is coming to dominate the market.  In my opinion, one of the most important works on the subject today is a book entitled “Machine Learning for Algorithmic Trading” by Stefan Jansen.  This is a beast of a book.   There’s nothing left out.  I’m applying the lessons learnt, and it has changed my perspective on the entire field of ML4T.  Very highly recommended for anyone interested in the subject – if you have the diligence to get through it!</Text>
    </GridItem>
    <Image src={require("../images/ML4T-book.jpg")} alt="Machine Learning for Algorithmic Trading" />
    <GridItem>
        <Text></Text>
    </GridItem>
    <GridItem>
        <Text></Text>
    </GridItem>
    <GridItem>
        <Text></Text>
    </GridItem>
    <GridItem>
        <Text></Text>
    </GridItem>
  </Grid>
</FullScreenSection>;

}
const ArtificialIntelligence = withColorPage(AIContent);

export default ArtificialIntelligence;
