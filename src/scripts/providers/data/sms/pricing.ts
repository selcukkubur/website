import type { IEmailPricing } from "../../types/email";

const emailPricing: IEmailPricing = {
  postmark: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 10,
    tiers: {
      "Up to 1,000": 10,
      "Up to 5,000": 10,
      "Up to 10,000": 10,
      "Up to 25,000": 28.75,
      "Up to 50,000": 50,
    },
  },
  mailgun: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 0.8,
    tiers: {
      "Up to 1,000": 0.8,
      "Up to 5,000": 4,
      "Up to 10,000": 8,
      "Up to 25,000": 20,
      "Up to 50,000": 35,
    },
  },
  sendgrid: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 14.95,
    tiers: {
      "Up to 1,000": 14.95,
      "Up to 5,000": 14.95,
      "Up to 10,000": 14.95,
      "Up to 25,000": 14.95,
      "Up to 50,000": 14.95,
    },
  },
  amazonSes: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 0.1,
    tiers: {
      "Up to 1,000": 0.1,
      "Up to 5,000": 0.5,
      "Up to 10,000": 1,
      "Up to 25,000": 2.5,
      "Up to 50,000": 5,
    },
  },
  sparkpost: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 20,
    tiers: {
      "Up to 1,000": 20,
      "Up to 5,000": 20,
      "Up to 10,000": 20,
      "Up to 25,000": 20,
      "Up to 50,000": 20,
    },
  },
  onesignalEmail: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 3,
    tiers: {
      "Up to 1,000": 0,
      "Up to 5,000": 0,
      "Up to 10,000": 30,
      "Up to 25,000": 75,
      "Up to 50,000": 150,
    },
  },
  mailjet: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 15,
    tiers: {
      "Up to 1,000": 0,
      "Up to 5,000": 0,
      "Up to 10,000": 15,
      "Up to 25,000": 35,
      "Up to 50,000": 35,
    },
  },
  mandrill: {
    has_free_tier: true,
    has_free_trial: true,
    starting_from_usd: 100,
    tiers: {
      "Up to 1,000": 20,
      "Up to 5,000": 20,
      "Up to 10,000": 20,
      "Up to 25,000": 20,
      "Up to 50,000": 40,
    },
  },
};

export default emailPricing;
