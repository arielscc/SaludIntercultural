import theme from "@/styles/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  console.log(theme.config.initialColorMode);

  return (
    <Html lang="es">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
