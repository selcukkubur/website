import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/postmark-email-notifications/Hero";
import Templates from "components/pages/postmark-email-notifications/Templates";
import Logs from "components/pages/postmark-email-notifications/Logs";
import Automations from "components/pages/postmark-email-notifications/Automations";

const PostmarkEmailNotifications = () => {
  return (
    <>
      <NextSeo
        title="Product Notifications Made Easy With Postmark + Courier"
        description="Programmatically send email notifications through Postmark using the Courier API."
      />
      <Header />
      <Hero />
      <Templates />
      <Logs />
      <Automations />
      <Footer />
    </>
  );
};

export default PostmarkEmailNotifications;
