import { useState, useEffect, useRef } from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { Text, Flex } from "@chakra-ui/react";
import { CopyBlock, paraisoDark } from "react-code-blocks";
import { CourierProvider } from "@trycourier/react-provider";
import { ToastBody } from "@trycourier/react-toast";

import DetailsModalSidebar from "./DetailsModalSidebar";
import DetailsModalSummary from "./DetailsModalSummary";

import data from "./data";

const DetailsModal = ({
  activeLogIndex,
  setActiveLogIndex,
}: {
  activeLogIndex: number | null;
  setActiveLogIndex: (activeLogIndex: number | null) => void;
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(-1);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => setActiveTabIndex(-1), [activeLogIndex]);

  const renderedTemplate: any =
    activeLogIndex == null
      ? null
      : data[activeLogIndex].logs[activeTabIndex]?.json?.renderedTemplate;

  useEffect(() => {
    if (!iframeRef.current) return;

    iframeRef.current.srcdoc = renderedTemplate?.html;
  }, [renderedTemplate]);

  return (
    <Modal
      isOpen={activeLogIndex != null}
      onClose={() => setActiveLogIndex(null)}
      size="5xl"
      scrollBehavior="inside"
      autoFocus={false}
    >
      <ModalOverlay bgColor="#ffffffcc" />
      <ModalContent
        h="100%"
        borderRadius="20px"
        boxShadow="rgb(157 55 137 / 20%) 0px 4px 12px"
        _focus={{
          boxShadow: "rgb(157 55 137 / 20%) 0px 4px 12px !important",
        }}
      >
        {activeLogIndex != null && (
          <Flex p="10px" h="100%" minH={0} color="#888" fontSize="14px">
            <DetailsModalSidebar
              activeLogIndex={activeLogIndex}
              activeTabIndex={activeTabIndex}
              setActiveTabIndex={setActiveTabIndex}
            />
            {activeTabIndex === -1 ? (
              <DetailsModalSummary activeLogIndex={activeLogIndex} />
            ) : renderedTemplate ? (
              <Flex flex={1} flexDir="column" px="24px">
                {renderedTemplate.subject && (
                  <Text p="20px">
                    Email Subject:{" "}
                    <Text as="span" color="#344563">
                      {renderedTemplate?.subject}
                    </Text>
                  </Text>
                )}

                {renderedTemplate?.html && (
                  <iframe style={{ flex: 1 }} ref={iframeRef} />
                )}

                {renderedTemplate?.blocks && (
                  <CourierProvider>
                    <ToastBody
                      title={renderedTemplate?.title}
                      body={renderedTemplate.body}
                      blocks={renderedTemplate.blocks}
                      theme={{
                        root: {
                          margin: "auto",
                        },
                      }}
                    />
                  </CourierProvider>
                )}
              </Flex>
            ) : (
              <Flex
                fontFamily="monospace"
                flex={1}
                minW={0}
                sx={{
                  "> div": { flex: 1, borderRadius: 20, overflowY: "auto" },
                }}
              >
                <CopyBlock
                  text={JSON.stringify(
                    data[activeLogIndex].logs[activeTabIndex].json,
                    null,
                    2
                  )}
                  language="JSON"
                  theme={paraisoDark}
                  codeBlock
                />
              </Flex>
            )}
          </Flex>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DetailsModal;
