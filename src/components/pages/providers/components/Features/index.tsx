import { Box } from "@chakra-ui/react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const FeaturesTable = ({
  features,
  isComparePage,
}: {
  features: [][];
  isComparePage?: boolean;
}) => {
  return (
    <Box>
      <Desktop features={features} isComparePage={isComparePage} />
      <Mobile />
      <span id="pricing" />
    </Box>
  );
};

export default FeaturesTable;
