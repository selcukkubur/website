import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/providers/alternatives/Content";
import { NextSeo } from "next-seo";
import heroPattern from "../../../../public/images/pages/guides/hero-pattern.svg";
import Hero from "components/pages/guides/Hero";
import getCategoryListData from "scripts/providers/generate-page-data/list";
const listOfCategories = ["transactional-email"];

export async function getStaticPaths() {
  const getListPaths = [];
  for (let index = 0; index < listOfCategories.length; index++) {
    const slug = listOfCategories[index];
    getListPaths.push({
      params: { slug },
    });
  }
  return {
    paths: getListPaths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const data = await getCategoryListData({ slug });
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
        companyInfo={companyInfo}
        features={features}
        recap={recap}
      />
      <Footer />
    </>
  );
};

export default GuidePage;
