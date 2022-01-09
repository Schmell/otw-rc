import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["2em", "2.5em"],
      fontWeight: "bold",
      lineHeight: "110%",
    },
    h2: {
      fontSize: ["1.5em", "2em"],
      fontWeight: "semibold",
      lineHeight: "110%",
    },
    h3: {
      fontSize: ["1em", "1.5em"],
    },
  },
});

export default theme;
