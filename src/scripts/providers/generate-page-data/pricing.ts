/*
  /sms-marketing-pricing	SMS Marketing Pricing Comparison Guide [2021]
  /push-notifications-cost	Push Notification Costs - The Complete Pricing Guide 
  /email-notification-providers-pricing	Top Email Notification Providers Pricing - 2021 Comparison
  Push Notification
  Transactional email
  SMS API
  /guides/sms-marketing-pricing
*/

import providerData from "../data/email/core";
import { EmailProvider } from "../types/email";
import getPricingTableData from "../functions/getPricingTableData";
import getDate from "../functions/getDate";
import getRecapData from "../functions/getRecapData";

const categoryMap: any = {
  "transactional-email": {
    name: "Transactional Email",
    internalSlug: "email",
  },
};

const generatePricingData = async ({ category }: { category: string }) => {
  const providers = providerData.filter(
    (i) => i.category === categoryMap[category].internalSlug
  );
  const providersMinusNodeMailer = providers.filter(
    (provider) => provider.name !== "SMTP"
  );
  const providersPricing = await getPricingTableData({
    providers: providersMinusNodeMailer,
  });
  const recapData = await getRecapData({ providers: providersMinusNodeMailer });
  const recapDataPricing = {
    "Cheapest (Small Plan)": recapData["Cheapest (Small Plan)"],
    "Cheapest (Bigger Plan)": recapData["Cheapest (Bigger Plan)"],
  };
  const categoryName = categoryMap[category].name;
  const categoryNameLowerCase = categoryName.toLowerCase();

  const pricingPageData = {
    title: `${categoryName} Pricing Guide [${getDate.year()}]`,
    metaDescription: `The ${categoryNameLowerCase} pricing guides compares pricing of ${providers.length} different providers so you can select the right provider at the best price.`,
    introduction: `There are many ${categoryNameLowerCase} providers in the market and it can be very difficult to compare pricing between them. This ${categoryNameLowerCase} pricing guide will look at the pricing plans of well-known providers so you can select the one that works best for your needs.`,
    pricing: providersPricing,
    recap: recapDataPricing,
    conclusion: `In the recap above, you can see which provider is the best when it comes exclusively to pricing. If you'd like to evaluate based on not only pricing but also other things such as company history, features, pros & cons etc, please have a look at our ${category} guide.`,
  };
  return pricingPageData;
};

export default generatePricingData;
