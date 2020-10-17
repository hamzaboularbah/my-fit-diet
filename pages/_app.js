import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalContainer } from "styles";

import { GlobalStyle } from "styles";

import theme from "theme";

import Header from "components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>My Fit Diet</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-72x72.png"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalContainer>
          <Header />
          <Component {...pageProps} />
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}
