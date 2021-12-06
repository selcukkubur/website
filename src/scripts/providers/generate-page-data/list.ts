import providerData from "../data/email/core";
import { EmailProvider } from "../types/email";
import getPricingTableData from "../functions/getPricingTableData";
import getCompanyInfoData from "../functions/getCompanyInfoTableData";
import getFeaturesTableData from "../functions/getFeaturesTableData";
import getProsAndConsData from "../functions/getProsAndConsData";
import getRecapData from "../functions/getRecapData";

const slugToName: any = {
  "transactional-email": "Transactional Email",
};

const generateAlternativesData = async ({ slug }: { slug: string }) => {
  const providers = providerData;
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
  const categoryName = slugToName[slug];
  const categoryNameLowerCase = categoryName.toLowerCase();

  const alternativesData = {
    title: `Top ${providers.length} ${categoryName} Providers for Developers in 2022`,
    metaDescription: `This guide covers the top ${providers.length} ${categoryName} providers and compares them in terms of pricing, features, customer reviews, pros & cons, and more.`,
    pricing: pricingTableData,
    companyInfo: companyInfoData,
    features: featuresData,
    introduction: `There are many ${categoryNameLowerCase} providers out there and selecting the right one for your needs can be overwhelming. To help you find the best ${categoryNameLowerCase} for your business, we have created a list of top ${categoryNameLowerCase} softwares and compared their features, pricing, pros & cons, customer reviews and more so you can narrow down your choices and find the best provider for your business.`,
    prosAndCons,
    recap: recapData,
    conclusion: `We hope you enjoyed this guide about the top ${categoryNameLowerCase} providers. If you have any questions or need a personalized recommendation for a ${categoryNameLowerCase} provider, please feel free to contact us anytime via live chat or email (help@courier.com).`,
  };
  return alternativesData;
};

export default generateAlternativesData;
