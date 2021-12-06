import Intro from "../components/Intro";
import ProsAndCons from "../components/ProsAndCons";
import Conclusion from "../components/Conclusion";
import { Box } from "@chakra-ui/react";
import Container from "components/Container";
import { Providers } from "../../../../scripts/providers/types/providers";
import TableOfContents from "../components/tableOfContents";
import PricingTable from "../components/Pricing";
import FeaturesTable from "../components/Features";
import CompanyInfoTable from "../components/CompanyInfo";
import Recap from "../components/Recap";

const tableOfContentsData = [
  {
    title: "Introduction",
    anchorLink: "#introduction",
  },
  {
    title: "Compare",
    items: [
      {
        title: "Features",
        anchorLink: "#features",
      },
      {
        title: "Pricing",
        anchorLink: "#pricing",
      },
      {
        title: "Pros & Cons",
        anchorLink: "#pros-and-cons",
      },
      {
        title: "Company Info",
        anchorLink: "#company-info",
      },
      {
        title: "Recap",
        anchorLink: "#recap",
      },
    ],
  },

  {
    title: "Conclusion",
    anchorLink: "#conclusion",
  },
];

const Content = ({
  introduction,
  prosAndCons,
  conclusion,
  pricing,
  companyInfo,
  features,
  recap,
  isComparePage,
}: {
  introduction: string;
  prosAndCons: any[];
  conclusion: string;
  pricing: [][];
  companyInfo: [][];
  features: [][];
  recap: any;
  isComparePage?: boolean;
}) => (
  <Container
    maxWidth={1240}
    display="flex"
    flexDir={{ base: "column", lg: "row" }}
    alignItems="flex-start"
  >
    <TableOfContents data={tableOfContentsData} />
    <Box
      color="#1A202C"
      flex={1}
      mb="60px"
      id="content"
      maxWidth={{ base: "100%", md: "700px", xl: "890px" }}
    >
      <Intro introduction={introduction} />
      <FeaturesTable features={features} isComparePage={isComparePage} />
      <PricingTable pricing={pricing} isComparePage={isComparePage} />
      <ProsAndCons prosAndCons={prosAndCons} />
      <CompanyInfoTable
        companyInfo={companyInfo}
        isComparePage={isComparePage}
      />
      <Recap recap={recap} />
      <Conclusion conclusion={conclusion} />
    </Box>
  </Container>
);

export default Content;
