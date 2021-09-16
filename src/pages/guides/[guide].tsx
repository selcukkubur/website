import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/guides/Content";
import { NextSeo } from "next-seo";
import GetGuideData from "scripts/GetGuideData";
import heroPattern from "../../../public/images/pages/guides/hero-pattern.svg";
import Hero from "components/pages/guides/Hero";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { guide } = params;
  const data = await GetGuideData({ slug: guide, isPreview: false });
  return {
    props: { data },
  };
}

const GuidePage = ({ data }: { data: any }) => {
  if (!data) return <p></p>;
  const {
    title,
    metaTitle,
    metaDescription,
    content,
    tableOfContents,
    assets,
    subTitle,
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
        <Hero title={title} subTitle={subTitle} />
      </Box>
      <Content
        contentMd={content}
        tableOfContents={tableOfContents}
        assets={assets}
      />
      <Footer />
    </>
  );
};

export default GuidePage;
