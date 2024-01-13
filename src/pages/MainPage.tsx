import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from ".././context/alertContext";

import Header from ".././components/Header";
import LandingSection from ".././components/LandingSection";
import ProjectsSection from ".././components/ProjectsSection";
import ContactMeSection from ".././components/ContactMeSection";
import Footer from ".././components/Footer";
import Alert from ".././components/Alert";

const colorSet: string[] = ["#1a57c9", "#6795c9", "#a7b5d6", "#C8B8C8"]

function MainPage() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection colors={colorSet} colorIndex={1} />
          <ProjectsSection colors={colorSet} colorIndex={2} />
          <ContactMeSection colors={colorSet} colorIndex={3} />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default MainPage;
