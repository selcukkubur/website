import emailFeatures from "../data/email/features";

const getFeaturesTableData = async ({ providers }: { providers: any[] }) => {
  const featuresData: any = [[]];
  const features = Object.keys(emailFeatures);
  for (let index = 0; index < features.length; index++) {
    const feature = features[index];
    featuresData[index + 1] = [feature];
  }

  for (let index = 0; index < providers.length; index++) {
    const provider = providers[index];
    const providerId = provider.id;
    featuresData[0].push(
      `${provider.website_url},${provider.images.company_logo},${provider.name}`
    );
    for (let index = 0; index < features.length; index++) {
      const feature = features[index];
      featuresData[index + 1].push(emailFeatures[feature][providerId]);
    }
  }

  return featuresData;
};

export default getFeaturesTableData;
