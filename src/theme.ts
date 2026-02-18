import { extendTheme } from "@chakra-ui/react";

export const layoutTokens = {
  sectionMaxW: "80rem",
  sectionPaddingX: { base: 6, sm: 8, md: 10, lg: 12 },
  sectionPaddingTop: { base: 28, md: 32 },
  sectionPaddingBottom: { base: 10, md: 12 },
};

const theme = extendTheme({
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});

export default theme;
