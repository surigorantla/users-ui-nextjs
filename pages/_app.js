import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  body {
    font-size:16px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#4b286d",
    linkColor: "rgb(43, 128, 0)",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Users App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
