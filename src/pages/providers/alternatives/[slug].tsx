import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/providers/alternatives/Content";
import { NextSeo } from "next-seo";
import heroPattern from "../../../../public/images/pages/guides/hero-pattern.svg";
import Hero from "components/pages/guides/Hero";
import getAlternativesData from "scripts/providers/generate-page-data/alternatives";
import providersData from "scripts/providers/data/email/core";

export async function getStaticPaths() {
  const allAlternativePagesPaths = [];
  for (let index = 0; index < providersData.length; index++) {
    const { slug } = providersData[index];
    allAlternativePagesPaths.push({
      params: { slug },
    });
  }
  return {
    paths: allAlternativePagesPaths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const data = await getAlternativesData({ slug });
  return {
    props: { data },
    revalidate: 60,
  };
}

const GuidePage = ({ data }: { data: any }) => {
  if (!data) return <p></p>;
  const {
    title,
    metaTitle,
    metaDescription,
    introduction,
    prosAndCons,
    conclusion,
    pricing,
    companyInfo,
    features,
    recap,
  } = data;

  return (
    <>
      <NextSeo title={metaTitle || title} description={metaDescription} />
      <Box
        background={`url('${heroPattern.src}') no-repeat, linear-gradient(90deg, #FD5E5F 0%, #C84093 50.52%, #9121C1 100%)`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="0 0 40px 40px"
      >
        <Header />
        <Hero title={title} />
      </Box>
      <Content
        introduction={introduction}
        prosAndCons={prosAndCons}
        conclusion={conclusion}
        pricing={pricing}
        recap={recap}
        companyInfo={companyInfo}
        features={features}
      />
      <Footer />
    </>
  );
};

export default GuidePage;
