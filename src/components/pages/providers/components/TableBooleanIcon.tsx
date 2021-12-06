import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const TableBooleanIcon = ({ booleanValue }: { booleanValue: boolean }) => (
  <Box>{booleanValue ? <CheckIcon /> : <CloseIcon />}</Box>
);

export default TableBooleanIcon;
