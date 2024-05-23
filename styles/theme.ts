import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    jet: "JetBrains Mono",
    montse: "Montserrat",
    script: "Euphoria Script",
  },
  colors: {
    tomato: "#ff0040",
    secondary: "#012a4a",
    third: "#00cecb",
  },
  // components: {
  //   Button,
  //   ButtonGroup,
  //   Link,
  // },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
