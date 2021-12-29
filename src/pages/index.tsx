import Header from "components/Header/index";
import Hero from "components/pages/home/Hero";
import TrustedBy from "components/pages/home/TrustedBy/index";
import NotificationSystem from "components/pages/home/NotificationSystem";
import VisualEditor from "components/pages/home/VisualEditor/index";
import Workflows from "components/pages/home/Workflows";
import APIOptions from "components/pages/home/APIOptions";
// import Integrations from "components/pages/home/Integrations";
import Insights from "components/pages/home/Insights";
// import Testimonials from "components/pages/home/Testimonials";
import Footer from "components/Footer/index";
import { NextSeo } from "next-seo";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      <NextSeo
        title="API for Email, SMS, Web & Mobile Push Notifications"
        description="Courier is a notification API built for developers. Design once, and deliver to any channel – email, Slack, SMS, push, and more – all through a single API."
      />
      <Header />
      <Hero />
      <TrustedBy />
      <NotificationSystem />
      <VisualEditor />
      <Workflows />
      <APIOptions />
      {/* <Integrations /> */}
      <Insights />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Home;
