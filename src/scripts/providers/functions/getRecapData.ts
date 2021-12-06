import { Provider } from "scripts/providers/types/providers";

const getRecapData = ({ providers }: { providers: Provider[] }) => {
  let recapDataValues = {
    "Most Popular": 0,
    "Most Funded": 0,
    "Most Established": 0,
    "Most Highly Rated": 0,
    "Cheapest (Small Plan)": 0,
    "Cheapest (Bigger Plan)": 0,
  };

  let recapData = {
    "Most Popular": "",
    "Most Funded": "",
    "Most Established": "",
    "Most Highly Rated": "",
    "Cheapest (Small Plan)": "",
    "Cheapest (Bigger Plan)": "",
  };

  for (let index = 0; index < providers.length; index++) {
    const provider = providers[index];
    const { pricing, name, alexa_rank, total_funding, founded_in, ratings } =
      provider;
    const { tiers } = pricing;
    const pricingUpto1000 = tiers["Up to 1,000"];
    const pricingUpto50000 = tiers["Up to 50,000"];
    const avgRating = (ratings.trustpilot + ratings.g2) / 2;

    //Most Popular
    if (
      !recapData["Most Popular"] ||
      recapDataValues["Most Popular"] > alexa_rank
    ) {
      recapData["Most Popular"] = name;
      recapDataValues["Most Popular"] = alexa_rank;
    }

    //Most Funded
    if (
      !recapData["Most Funded"] ||
      recapDataValues["Most Funded"] < total_funding
    ) {
      recapData["Most Funded"] = name;
      recapDataValues["Most Funded"] = total_funding;
    }

    //Most Established
    if (
      !recapData["Most Established"] ||
      recapDataValues["Most Established"] > founded_in
    ) {
      recapData["Most Established"] = name;
      recapDataValues["Most Established"] = founded_in;
    }

    //Most Highly Rated
    if (
      !recapData["Most Highly Rated"] ||
      recapDataValues["Most Highly Rated"] < avgRating
    ) {
      recapData["Most Highly Rated"] = name;
      recapDataValues["Most Highly Rated"] = avgRating;
    }

    //Most Highly Rated
    if (
      !recapData["Most Highly Rated"] ||
      recapDataValues["Most Highly Rated"] < avgRating
    ) {
      recapData["Most Highly Rated"] = name;
      recapDataValues["Most Highly Rated"] = avgRating;
    }

    //Cheapest (Small Plan)
    if (
      !recapData["Cheapest (Small Plan)"] ||
      recapDataValues["Cheapest (Small Plan)"] > pricingUpto1000
    ) {
      recapData["Cheapest (Small Plan)"] = name;
      recapDataValues["Cheapest (Small Plan)"] = pricingUpto1000;
    }

    //Cheapest (Small Plan)
    if (
      !recapData["Cheapest (Bigger Plan)"] ||
      recapDataValues["Cheapest (Bigger Plan)"] > pricingUpto50000
    ) {
      recapData["Cheapest (Bigger Plan)"] = name;
      recapDataValues["Cheapest (Bigger Plan)"] = pricingUpto50000;
    }
  }
  return recapData;
};

export default getRecapData;
