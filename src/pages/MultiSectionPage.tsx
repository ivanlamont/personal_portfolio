import { ChakraProvider, Box } from "@chakra-ui/react";
import { AlertProvider } from "../context/alertContext";

import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import { ColorThemeContext } from "../context/colorContext";
import appTheme from "../theme";

export interface PageProps {
    colorSet: string[]
    fadedBackground?: string
}

export default function withMultisectionPage<P>(Component: React.ComponentType<P>) {
    return  (props: P & PageProps) => {
        const [theme, setTheme] = useState<string>('light');
        const toggleTheme = () => {
            setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        };
        
        return (
                <ChakraProvider theme={appTheme}>
                    <AlertProvider>
                        <main>
                            <Header/>
                            <ColorThemeContext.Provider value={{ theme, toggleTheme }}>
                                <Component {...props} />
                            </ColorThemeContext.Provider>
                            <Footer />
                            <Alert />
                        </main>
                    </AlertProvider>
                </ChakraProvider>
                
        );
    }
}
