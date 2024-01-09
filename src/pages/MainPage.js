import { ChakraProvider } from "@chakra-ui/react";
import Header from ".././components/Header";
import LandingSection from ".././components/LandingSection";
import ProjectsSection from ".././components/ProjectsSection";
import ContactMeSection from ".././components/ContactMeSection";
import Footer from ".././components/Footer";
import { AlertProvider } from ".././context/alertContext";
import Alert from ".././components/Alert";

// const back_top_color = "#1a57c9"
// const back_bottom_color = "#6795c9"

// const back_top_color = "#6795c6"
// const back_bottom_color = "#87a5d6"

// const back_top_color = "#87a5d6"
// const back_bottom_color = "#8888A8"

const colorSet = ["#1a57c9", "#6795c9", "#87a5d6", "#8888A8"]

function MainPage() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection colors={colorSet} colorIndex="1" />
          <ProjectsSection colors={colorSet} colorIndex="2" />
          <ContactMeSection colors={colorSet} colorIndex="3" />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default MainPage;
