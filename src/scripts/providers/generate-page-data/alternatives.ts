import providerData from "../data/email/core";
import { EmailProvider } from "../types/email";
import getPricingTableData from "../functions/getPricingTableData";
import getCompanyInfoData from "../functions/getCompanyInfoTableData";
import getFeaturesTableData from "../functions/getFeaturesTableData";
import getProsAndConsData from "../functions/getProsAndConsData";
import getDate from "../functions/getDate";
import getRecapData from "../functions/getRecapData";

const generateAlternativesData = async ({ slug }: { slug: string }) => {
  const providerDetails = providerData.find((i) => i.slug === slug);
  const { category, name } = providerDetails!;
  const alternatives = providerData.filter(
    (i) => i.slug !== slug && i.category === category
  );
  const providersMinusNodeMailer = alternatives.filter(
    (provider) => provider.name !== "SMTP"
  );

  const pricingTableData = await getPricingTableData({
    providers: providersMinusNodeMailer,
  });
  const companyInfoData = await getCompanyInfoData({
    providers: providersMinusNodeMailer,
  });
  const featuresData = await getFeaturesTableData({ providers: alternatives });
  const prosAndCons = await getProsAndConsData({ providers: alternatives });
  const recapData = await getRecapData({ providers: providersMinusNodeMailer });

  const alternativesData = {
    title: `${
      alternatives.length
    } Best ${name} Alternatives & Competitors (${getDate.monthYear()})`,
    metaDescription: `This guide covers the top ${alternatives.length} ${name} alternatives and compares them in terms of pricing, features, customer reviews, pros & cons, and more.`,
    pricing: pricingTableData,
    companyInfo: companyInfoData,
    features: featuresData,
    introduction: `${name} is one of the best email service providers out there. With a simple interface, a wealth of features, and a free trial, it's a great way to send email with ease. But what if ${name} didn't work for you and you're looking for an alternative to ${name}? In this guide, we'll look at the best ${name} alternatives and see how they compare.`,
    prosAndCons,
    recap: recapData,
    conclusion: `We hope you enjoyed this guide about ${name} alternatives. If you were looking for a new email service and ${name} did not meet your needs, we hope that we were able to direct you to an alternative that will. If you have any questions or need a personalized ${name} alternative recommendation, please feel free to contact us anytime via live chat or email (help@courier.com).`,
  };
  return alternativesData;
};

export default generateAlternativesData;
