import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from ".././context/alertContext";

import React from "react";

import Header from ".././components/Header";
import Footer from ".././components/Footer";
import Alert from ".././components/Alert";

export interface ColorPageProps {
    colorSet: string[]
    colorIndex?: number
}

export default function withColorPage<P>(Component: React.ComponentType<P>) {
    return  (props: P & ColorPageProps) => {
        return (
                <ChakraProvider >
                    <AlertProvider>
                        <main>
                            <Header />
                            <Component {...props} />
                            <Footer />
                            <Alert />
                        </main>
                    </AlertProvider>
                </ChakraProvider>
                
        );
    }
}
