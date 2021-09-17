import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Header from "components/Header/index";
import Hero from "components/pages/features/preferences/Hero";
import UserPreferences from "components/pages/features/preferences/UserPreferences";
import PreferencesApi from "components/pages/features/preferences/PreferencesApi";
import Footer from "components/Footer/index";

const FeaturesPreferences = () => {
  return (
    <>
      <NextSeo
        title="Preferences | Features"
        description="Perfectly formatted messages for every channel."
      />
      <Box
        background={`url('/banner-pattern.svg') no-repeat, linear-gradient(270deg,#9121c2,#ff5e5e)`}
        backgroundSize="cover"
        borderRadius="0 0 40px 40px"
        overflow="hidden"
      >
        <Header />
        <Hero />
      </Box>
      <UserPreferences />
      <PreferencesApi />
      <Footer />
    </>
  );
};

export default FeaturesPreferences;
