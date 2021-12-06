import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/user-activity-notifications/Hero";
import Experience from "components/pages/user-activity-notifications/Experience";
import Integrations from "components/pages/user-activity-notifications/Integrations";
import Api from "components/pages/user-activity-notifications/Api";
import Banner from "components/pages/user-activity-notifications/Banner";
import Animations from "components/pages/user-activity-notifications/Animations";
import Testimonials from "components/pages/home/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserActivityNotifications = () => {
  return (
    <>
      <NextSeo
        title="User Activity Notifications"
        description="Keep users up to speed with key actions other users on your platform have taken."
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

export default UserActivityNotifications;
