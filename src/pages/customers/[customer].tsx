import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { NextSeo } from "next-seo";
import GetCustomerStories, { CustomerStory } from "scripts/GetCustomerStories";
import Header from "components/Header";
import Footer from "components/Footer";

import Hero from "components/pages/customer-stories/Hero";
import CompanyInfo from "components/pages/customer-stories/CompanyInfo";
import Section from "components/pages/customer-stories/Section";

export async function getStaticPaths() {
  const customerStories = await GetCustomerStories();
  const paths = customerStories.map((story) => ({
    params: { customer: story.fields.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ customer: string }>
): Promise<GetStaticPropsResult<CustomerStoryProps>> {
  const { params } = context;
  const customerStory = await GetCustomerStories(params?.customer || "");

  if (!customerStory) {
    return { notFound: true };
  }

  return {
    props: { customerStory },
    revalidate: 60 * 10,
  };
}

interface CustomerStoryProps {
  customerStory: CustomerStory;
}

const CustomerStoryPage = ({ customerStory }: CustomerStoryProps) => {
  return (
    <>
      <NextSeo
        title={customerStory.fields.title}
        description={customerStory.fields.metaDescription}
      />

      <Header headerPlain />

      <Hero customerStory={customerStory} />

      <Section
        mt="38px"
        sidebar={<CompanyInfo customerStory={customerStory} />}
      >
        {customerStory.fields.mainContent}
      </Section>

      <Section title="Why Courier?" bgColor="#F9F4FC">
        {customerStory.fields.whyCourier}
      </Section>

      <Section title="The Road to Success">
        {customerStory.fields.theRoadToSuccess}
      </Section>

      <Section
        title="Conclusion"
        bgColor="#FBEBE1"
        mb={{ base: "-116px", lg: "-156px" }}
        pb={6}
        isConclusion
      >
        {customerStory.fields.conclusion}
      </Section>

      <Footer cta="none" />
    </>
  );
};

export default CustomerStoryPage;
