import { extendTheme } from "@chakra-ui/react";

export const layoutTokens = {
  sectionMaxW: "80rem",
  sectionPaddingX: { base: 4, sm: 6, md: 8, lg: 10 },
  sectionPaddingTop: { base: 24, md: 28 },
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
