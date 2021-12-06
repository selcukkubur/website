const getPricingTableData = async ({ providers }: { providers: any[] }) => {
  const providersPricing: any = [
    [],
    // ["Has Free Tier"],
    // ["Has Free Trial"],
    // ["Price Starting From (USD)"],
    ["Up to 1,000"],
    ["Up to 5,000"],
    ["Up to 10,000"],
    ["Up to 25,000"],
    ["Up to 50,000"],
  ];
  for (let index = 0; index < providers.length; index++) {
    const provider = providers[index];
    const { pricing } = provider;
    const pricingPlans = Object.keys(pricing.tiers);
    providersPricing[0].push(
      `${provider.website_url},${provider.images.company_logo},${provider.name}`
    );
    // providersPricing[1].push(pricing.has_free_tier);
    // providersPricing[2].push(pricing.has_free_trial);
    // providersPricing[3].push(pricing.starting_from_usd);
    providersPricing[1].push(pricing.tiers[pricingPlans[0]]);
    providersPricing[2].push(pricing.tiers[pricingPlans[1]]);
    providersPricing[3].push(pricing.tiers[pricingPlans[2]]);
    providersPricing[4].push(pricing.tiers[pricingPlans[3]]);
    providersPricing[5].push(pricing.tiers[pricingPlans[4]]);
  }
  return providersPricing;
};

export default getPricingTableData;
