import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/action-notifications/Hero";
import Experience from "components/pages/action-notifications/Experience";
import Integrations from "components/pages/action-notifications/Integrations";
import Api from "components/pages/action-notifications/Api";
import Banner from "components/pages/action-notifications/Banner";
import Animations from "components/pages/action-notifications/Animations";
import Testimonials from "components/pages/home/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActionNotifications = () => {
  return (
    <>
      <NextSeo
        title="Action Notifications"
        description="Proactively notify users when their action is required."
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

export default ActionNotifications;
