import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/pages/enterprise/Hero";
import Api from "components/pages/enterprise/Api";
import Security from "components/pages/enterprise/Security";
import Scale from "components/pages/enterprise/Scale";

const Enterprise = () => {
  return (
    <>
      <NextSeo
        title="Modern product notifications without the overhead"
        description="Product notifications are the voice of your application. Courier Enterprise empowers engineering and product teams to deliver a great customer experience while reducing development and operational overhead."
      />
      <Header />
      <Hero />
      <Api />
      <Security />
      <Scale />
      <Footer />
    </>
  );
};

export default Enterprise;
