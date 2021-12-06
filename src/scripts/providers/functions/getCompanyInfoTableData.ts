const getCompanyInfoTableData = async ({ providers }: { providers: any[] }) => {
  const companyInfo: any = [
    [],
    ["Alexa Rank"],
    ["Funding"],
    ["Employee Count"],
    ["Founded In"],
    ["Headquarters"],
    ["Trustpilot Rating"],
    ["G2 Rating"],
  ];

  for (let index = 0; index < providers.length; index++) {
    const provider = providers[index];
    companyInfo[0].push(
      `${provider.website_url},${provider.images.company_logo},${provider.name}`
    );
    companyInfo[1].push(provider.alexa_rank);
    companyInfo[2].push(provider.total_funding);
    companyInfo[3].push(provider.employee_count);
    companyInfo[4].push(provider.founded_in);
    companyInfo[5].push(
      provider.headquarter_city + ", " + provider.headquarter_country
    );
    companyInfo[6].push(provider.ratings.trustpilot);
    companyInfo[7].push(provider.ratings.g2);
  }
  return companyInfo;
};

export default getCompanyInfoTableData;
