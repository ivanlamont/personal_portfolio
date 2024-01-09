import { ChakraProvider } from "@chakra-ui/react";
import Header from ".././components/Header";
import Footer from ".././components/Footer";

function About() {
  return (
    <ChakraProvider>
        <main>
          <Header />
            <Avatar
              size='2xl'
              name='Ivan J. Lamont'
              src={require("../images/self_small.jpg")}
            />
          <Footer />
          <Alert />
        </main>
    </ChakraProvider>
  );
}

export default About;
