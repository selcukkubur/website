export type Provider = {
  name: string;
  id: string;
  slug: string;
  category: string;
  competitors: any;
  website_url: string;
  courier_url: string;
  images: {
    company_logo: string;
    app_screenshot: string;
  };
  alexa_rank: number;
  employee_count: number;
  description: string;
  headquarter_city: string;
  headquarter_country: string;
  total_funding: number;
  founded_in: number;
  pros: Array<string>;
  cons: Array<string>;
  when_to_use: Array<string>;
  ratings: {
    trustpilot: number;
    g2: number;
  };
  features: any;
  pricing: any;
};

export type Providers = Provider[];
