import { Box } from "@chakra-ui/react";
import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/providers/alternatives/Content";
import { NextSeo } from "next-seo";
import heroPattern from "../../../../public/images/pages/guides/hero-pattern.svg";
import Hero from "components/pages/guides/Hero";
import getComparisonData from "scripts/providers/generate-page-data/comparison";
import emailProviderData from "../../../scripts/providers/data/email/core";
import providersData from "scripts/providers/data/email/core";
import getArrayCombinations from "scripts/providers/functions/getArrayCombinations";

/*
  /sms-marketing-pricing	SMS Marketing Pricing Comparison Guide [2021]
  /push-notifications-cost	Push Notification Costs - The Complete Pricing Guide 
  /email-notification-providers-pricing	Top Email Notification Providers Pricing - 2021 Comparison
  Push Notification
  Transactional email
  SMS API
  /guides/sms-marketing-pricing
*/

export async function getStaticPaths() {
  const allProvidersSlug = [];
  for (let index = 0; index < providersData.length; index++) {
    const { slug } = providersData[index];
    allProvidersSlug.push(slug);
  }
  const allSlugCombinations = getArrayCombinations(allProvidersSlug);
  const allSlugVersusCombinations = allSlugCombinations.map(
    (providerString) => {
      return {
        params: {
          slug: providerString.replace(" ", "-vs-"),
        },
      };
    }
  );
  return {
    paths: allSlugVersusCombinations,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const [vendor1, vendor2] = slug.split("-vs-");
  const vendor1Data = emailProviderData.find((i) => i.slug === vendor1);
  const vendor2Data = emailProviderData.find((i) => i.slug === vendor2);
  const data = await getComparisonData({
    providers: [vendor1Data, vendor2Data],
  });
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
        isComparePage={true}
      />
      <Footer />
    </>
  );
};

export default GuidePage;
