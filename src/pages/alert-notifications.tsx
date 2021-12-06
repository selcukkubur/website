import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/alert-notifications/Hero";
import Experience from "components/pages/alert-notifications/Experience";
import Integrations from "components/pages/alert-notifications/Integrations";
import Banner from "components/pages/alert-notifications/Banner";
import Animations from "components/pages/alert-notifications/Animations";
import Api from "components/pages/alert-notifications/Api";
import Testimonials from "components/pages/home/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlertNotifications = () => {
  return (
    <>
      <NextSeo
        title="Alert Notifications"
        description="Ensure deliverability and visibility of your user alerts."
      />
      <Header />
      <Hero />
      <Experience />
      <Api />
      <Testimonials />
      <Banner />
      <Animations />
      <Integrations />
      <Footer />
    </>
  );
};

export default AlertNotifications;
