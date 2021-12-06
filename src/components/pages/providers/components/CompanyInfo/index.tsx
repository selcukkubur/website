import { Box } from "@chakra-ui/react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const FeaturesTable = ({
  companyInfo,
  isComparePage,
}: {
  companyInfo: [][];
  isComparePage?: boolean;
}) => {
  return (
    <Box>
      <Desktop companyInfo={companyInfo} isComparePage={isComparePage} />
      <Mobile />
      <span id="recap" />
    </Box>
  );
};

export default FeaturesTable;
