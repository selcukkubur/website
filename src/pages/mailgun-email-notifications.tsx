import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/mailgun-email-notifications/Hero";
import Templates from "components/pages/mailgun-email-notifications/Templates";
import Logs from "components/pages/mailgun-email-notifications/Logs";
import Automations from "components/pages/mailgun-email-notifications/Automations";

const MailgunEmailNotifications = () => {
  return (
    <>
      <NextSeo
        title="Product Notifications Made Easy With Mailgun + Courier"
        description="Programmatically send email notifications through Mailgun using the Courier API."
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

export default MailgunEmailNotifications;
