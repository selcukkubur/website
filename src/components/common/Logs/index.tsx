import { useState } from "react";

import ListTable from "./ListTable";
import DetailsModal from "./DetailsModal";

const Logs = () => {
  const [activeLogIndex, setActiveLogIndex] = useState<number | null>(null);

  return (
    <>
      <ListTable setActiveLogIndex={setActiveLogIndex} />

      <DetailsModal
        activeLogIndex={activeLogIndex}
        setActiveLogIndex={setActiveLogIndex}
      />
    </>
  );
};

export default Logs;
