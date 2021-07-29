import { createElement } from "react";
import { GetStaticPropsContext } from "next";
import { Box, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Header from "components/Header/index";
import Container from "components/Container";

import Hero from "components/pages/developers-guide-notifications/Hero";
import TableOfContents, {
  PAGE_COMPONENTS,
  PAGE_TITLES,
  PAGE_PATH,
} from "components/pages/developers-guide-notifications/TableOfContents";
import heroPattern from "../../../public/images/pages/guides/hero-pattern.svg";

export const getStaticPaths = () => ({
  paths: [
    { params: { slug: [] } },
    { params: { slug: ["end-user-experience-requirements"] } },
    { params: { slug: ["internal-user-experience-requirements"] } },
    { params: { slug: ["technical-requirements"] } },
  ],
  fallback: false,
});

export const getStaticProps = (
  context: GetStaticPropsContext<{ slug: PAGE_PATH }>
) => {
  const { params } = context;
  const { slug = null } = params || {};
  return {
    props: { slug },
  };
};

const DevelopersGuideNotifications = ({ slug }: { slug?: [PAGE_PATH] }) => {
  const path = slug?.[0] || "";

  const pageTitle = "Startup Guide To Notifications | Courier";
  const pageDescription =
    "Everything you need to know to build a great notification experience for your application";
  const pageUrl = `https://www.courier.com/developers-guide-notifications${
    path && `/${path}`
  }`;

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraph={{
          type: "website",
          title: pageTitle,
          description: pageDescription,
          site_name: "Courier",
          images: [{ url: "https://www.courier.com/images/og-image.png" }],
        }}
        twitter={{
          cardType: "summary",
          site: "@trycourier",
        }}
      />
      <Box
        background={`url('${heroPattern.src}') no-repeat, linear-gradient(90deg, #FD5E5F 0%, #C84093 50.52%, #9121C1 100%)`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="0 0 40px 40px"
      >
        <Header />
        <Hero />
      </Box>
      <Container
        maxWidth={1100}
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        alignItems="flex-start"
      >
        <TableOfContents />
        <Box color="#1A202C" flex={1} mb="60px">
          <Heading
            as="h2"
            variant="h4"
            mt={{ base: "60px", lg: "100px" }}
            color="secondary.dark"
          >
            {PAGE_TITLES[path]}
          </Heading>

          {createElement(PAGE_COMPONENTS[path])}
        </Box>
      </Container>
    </>
  );
};

export default DevelopersGuideNotifications;
