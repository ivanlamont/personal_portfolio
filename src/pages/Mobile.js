import { ChakraProvider } from "@chakra-ui/react";
import Header from ".././components/Header";

import Footer from ".././components/Footer";
import { AlertProvider } from ".././context/alertContext";
import Alert from ".././components/Alert";

function Mobile() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <TradingSection />
          <PrimeBrokerageSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default Mobile;
