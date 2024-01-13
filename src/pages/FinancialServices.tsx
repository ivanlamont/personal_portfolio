import { ChakraProvider } from "@chakra-ui/react";
import Header from ".././components/Header";
import TradingSection from ".././components/TradingSection";
import PrimeBrokerageSection from ".././components/PrimeBrokerageSection";
import Footer from ".././components/Footer";
import { AlertProvider } from ".././context/alertContext";
import Alert from ".././components/Alert";

const colorSet = ["#1a97c9", "#67d5c9", "#87e5d6", "#88c8A8"]

function FinancialServices() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <TradingSection colors={colorSet} colorIndex={1}  />
          <PrimeBrokerageSection colors={colorSet} colorIndex={2}  />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default FinancialServices;
