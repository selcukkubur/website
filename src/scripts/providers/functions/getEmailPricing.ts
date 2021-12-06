import { EmailProvider } from "../types/email";
import emailPricing from "../data/email/pricing";

const getEmailFeatures = ({ provider }: { provider: EmailProvider }) => {
  return emailPricing[provider];
};

export default getEmailFeatures;
