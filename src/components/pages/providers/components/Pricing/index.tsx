import { Box } from "@chakra-ui/react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const PricingTable = ({
  pricing,
  isComparePage,
}: {
  pricing: [][];
  isComparePage?: boolean;
}) => {
  return (
    <Box>
      <Desktop pricing={pricing} isComparePage={isComparePage} />
      <Mobile />
      <span id="pros-and-cons" />
    </Box>
  );
};

export default PricingTable;
