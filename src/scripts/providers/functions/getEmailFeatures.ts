import {
  EmailProvider,
  IProviderFeatures,
  EmailFeatures,
} from "../types/email";
import emailFeatures from "../data/email/features";

const getEmailFeatures = ({ provider }: { provider: EmailProvider }) => {
  const thisProviderFeatures: IProviderFeatures = {};
  const allFeatureKeys = Object.keys(emailFeatures) as Array<EmailFeatures>;
  for (let index = 0; index < allFeatureKeys.length; index++) {
    const feature = allFeatureKeys[index];
    thisProviderFeatures[feature] = emailFeatures[feature][provider];
  }
  return thisProviderFeatures;
};

export default getEmailFeatures;
