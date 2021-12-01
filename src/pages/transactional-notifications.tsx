import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/transactional-notifications/Hero";
import Experience from "components/pages/transactional-notifications/Experience";
import Integrations from "components/pages/transactional-notifications/Integrations";
import Banner from "components/pages/transactional-notifications/Banner";
import Animations from "components/pages/transactional-notifications/Animations";
import Testimonials from "components/pages/home/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TransactionalNotifications = () => {
  return (
    <>
      <NextSeo
        title="Transactional Notifications"
        description="Unify all your transactional notifications across teams, products, and channels."
      />
      <Header />
      <Hero />
      <Testimonials />
      <Experience />
      <Banner />
      <Animations />
      <Integrations />
      <Footer />
    </>
  );
};

export default TransactionalNotifications;
