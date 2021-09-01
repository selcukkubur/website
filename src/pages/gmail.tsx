import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import TrustedBy from "components/pages/home/TrustedBy";
import Testimonials from "components/pages/home/Testimonials";
import Hero from "components/pages/gmail/Hero";
import NotificationSystem from "components/pages/gmail/NotificationSystem";
import "slick-carousel/slick/slick.css";

const Gmail = () => {
  return (
    <>
      <NextSeo
        title="Gmail"
        description="Programmatically send emails through Gmail using the Courier API."
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <TrustedBy />
      <NotificationSystem />
      <Testimonials />
      <Footer cta="google" />
    </>
  );
};

export default Gmail;
