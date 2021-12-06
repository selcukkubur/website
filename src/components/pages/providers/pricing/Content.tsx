import Intro from "../components/Intro";
import PricingTable from "../components/Pricing";
import Conclusion from "../components/Conclusion";
import { Box } from "@chakra-ui/react";
import Container from "components/Container";
import Recap from "../components/Recap";

const Content = ({
  introduction,
  pricing,
  conclusion,
  recap,
}: {
  introduction: string;
  pricing: [][];
  conclusion: string;
  recap: any;
}) => (
  <Box>
    <Container maxWidth={1100}>
      <Intro introduction={introduction} />
      <PricingTable pricing={pricing} />
      <Recap recap={recap} />
      <Conclusion conclusion={conclusion} />
    </Container>
  </Box>
);

export default Content;
