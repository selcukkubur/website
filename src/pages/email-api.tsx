import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/email-api/Hero";
import TrustedBy from "components/pages/home/TrustedBy";
import NotificationSystem from "components/pages/email-api/NotificationSystem";
import VisualEditor from "components/pages/home/VisualEditor";
import Workflows from "components/pages/email-api/Workflows";
import APIOptions from "components/pages/email-api/APIOptions";
import Integrations from "components/pages/email-api/Integrations";
import Insights from "components/pages/email-api/Insights";
import Testimonials from "components/pages/home/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EmailApi = () => {
  return (
    <>
      <NextSeo
        title="Email"
        description="Programmatically send emails using the Courier API."
      />

      <Header />
      <Hero />
      <TrustedBy />
      <NotificationSystem />
      <VisualEditor />
      <Workflows />
      <APIOptions />
      <Integrations />
      <Insights />
      <Testimonials />
      <Footer />
    </>
  );
};

export default EmailApi;
