import providerData from "../data/email/core";
import { EmailProvider } from "../types/email";
import getPricingTableData from "../functions/getPricingTableData";
import getCompanyInfoData from "../functions/getCompanyInfoTableData";
import getFeaturesTableData from "../functions/getFeaturesTableData";
import getProsAndConsData from "../functions/getProsAndConsData";
import getDate from "../functions/getDate";
import getRecapData from "../functions/getRecapData";

const generateComparisonPageData = async ({
  providers,
}: {
  providers: any[];
}) => {
  const pricingTableData = await getPricingTableData({
    providers,
  });
  const providersMinusNodeMailer = providers.filter(
    (provider) => provider.name !== "SMTP"
  );
  const companyInfoData = await getCompanyInfoData({
    providers: providersMinusNodeMailer,
  });
  const featuresData = await getFeaturesTableData({ providers });
  const prosAndCons = await getProsAndConsData({ providers });
  const recapData = await getRecapData({ providers: providersMinusNodeMailer });

  const [vendor1, vendor2] = providers;

  const comparisonData = {
    title: `${vendor1.name} v/s ${
      vendor2.name
    }: An Email Provider Comparison [${getDate.year()}]`,
    metaDescription: `${vendor1.name} vs ${vendor2.name} - which email service is better? Explore ${vendor1.name} and ${vendor2.name}'s features, pricing, reviews, and more to decide the best service for your needs.`,
    pricing: pricingTableData,
    companyInfo: companyInfoData,
    features: featuresData,
    introduction: `If you're looking for a reliable email service, ${vendor1.name} and ${vendor2.name} might be your best options. So, what's better: ${vendor1.name} or ${vendor2.name}? This comparison guide will look at the pros and cons of ${vendor1.name} and ${vendor2.name}, including pricing, features, customer reviews and more.`,
    prosAndCons,
    recap: recapData,
    conclusion: `We hope you enjoyed our guide about ${vendor1.name} vs ${vendor2.name}. With this information, we hope that you can make an educated decision on which email provider is best for you. In case you need any more information on either of these two companies or need a personalized recommendation, please feel free to contact us anytime via live chat or email (help@courier.com).`,
  };
  return comparisonData;
};

export default generateComparisonPageData;
