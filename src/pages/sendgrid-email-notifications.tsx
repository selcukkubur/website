import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/sendgrid-email-notifications/Hero";
import Templates from "components/pages/sendgrid-email-notifications/Templates";
import Logs from "components/pages/sendgrid-email-notifications/Logs";
import Automations from "components/pages/sendgrid-email-notifications/Automations";

const SendgridEmailNotifications = () => {
  return (
    <>
      <NextSeo
        title="Product Notifications Made Easy With SendGrid + Courier"
        description="Programmatically send email notifications through Sendgrid using the Courier API."
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

export default SendgridEmailNotifications;
