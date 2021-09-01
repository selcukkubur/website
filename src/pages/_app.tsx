import { ChakraProvider, Box } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import "focus-visible/dist/focus-visible";

import customTheme from "styles/customTheme";
import "styles/globals.css";
import { Provider as AnalyticsContextProvider } from "components/AnalyticsContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <ChakraProvider theme={customTheme}>
      <AnalyticsContextProvider>
        <DefaultSeo
          defaultTitle="Courier"
          titleTemplate="%s | Courier"
          canonical={`https://www.courier.com${router.asPath}`}
          openGraph={{
            type: "website",
            site_name: "Courier",
            images: [{ url: "https://www.courier.com/images/og-image.png" }],
          }}
          twitter={{
            cardType: "summary",
            site: "@trycourier",
          }}
          additionalMetaTags={[
            {
              name: "viewport",
              content:
                "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
            },
          ]}
        />
        <Box margin="0 auto" transition="0.5s ease-out">
          <Box as="main">
            <Component {...pageProps} />
          </Box>
        </Box>
      </AnalyticsContextProvider>
    </ChakraProvider>
  );
};

export default MyApp;
