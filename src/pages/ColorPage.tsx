import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "../context/alertContext";

import React, { useState } from "react";

import Header from ".././components/Header";
import Footer from ".././components/Footer";
import Alert from ".././components/Alert";
import { ColorThemeContext } from "../context/colorContext";

export interface ColorPageProps {
    colorSet: string[]
    colorIndex?: number
}

export default function withColorPage<P>(Component: React.ComponentType<P>) {
    return  (props: P & ColorPageProps) => {
        const [theme, setTheme] = useState<string>('light');
        const toggleTheme = () => {
            setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        };
        
        return (
                <ChakraProvider >
                    <AlertProvider>
                        <main>
                            <Header />
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
