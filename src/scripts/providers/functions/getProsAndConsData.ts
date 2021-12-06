import emailData from "../../../scripts/providers/data/email/core";

const getProsAndConsData = async ({ providers }: { providers: any[] }) => {
  const prosAndConsData: any = [];

  for (let index = 0; index < providers.length; index++) {
    const { id } = providers[index];
    const providerData = emailData.find((i) => i.id == id);
    const { name, website_url, images, description, pros, cons, when_to_use } =
      providerData!;
    const providerProsAndCons = {
      id,
      name,
      description,
      website_url,
      pros,
      cons,
      when_to_use,
      app_screenshot: images.app_screenshot,
    };
    prosAndConsData.push(providerProsAndCons);
  }

  return prosAndConsData;
};

export default getProsAndConsData;
