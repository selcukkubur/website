export type EmailFeatures = "Drag & Drop Editor" | "Custom HTML Editor";

export const emailProviders = [
  "postmark",
  "mailgun",
  "amazonSes",
  "mailjet",
  "mandrill",
  "onesignalEmail",
  "sendgrid",
  "sparkpost",
  "smtp",
] as const;

export type EmailProvider = typeof emailProviders[number];

export type IEmailFeatures = {
  [key in string]: {
    [key in string]: any;
  };
};

export type IEmailPricing = {
  [key in EmailProvider]?: {
    has_free_tier: boolean;
    has_free_trial: boolean;
    starting_from_usd: number;
    tiers: Object;
  };
};

export type IProviderFeatures = {
  [key in string]?: any;
};
