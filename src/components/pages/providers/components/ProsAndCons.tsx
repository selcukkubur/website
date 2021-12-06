import {
  Box,
  Heading,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Providers } from "../../../../scripts/providers/types/providers";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import PostMarkImage from "../../../../../public/images/pages/providers/postmark-app.png";
import AmazonSesImage from "../../../../../public/images/pages/providers/amazon-ses-app.png";
import MailgunImage from "../../../../../public/images/pages/providers/mailgun-app.png";
import MailjetImage from "../../../../../public/images/pages/providers/mailjet-app.png";
import MandrillImage from "../../../../../public/images/pages/providers/mandrill-app.jpeg";
import OnesignalImage from "../../../../../public/images/pages/providers/onesignal-app.jpeg";
import SendgridImage from "../../../../../public/images/pages/providers/sendgrid-app.png";
import SMTPImage from "../../../../../public/images/pages/providers/smtp-app.png";
import SparkpostImage from "../../../../../public/images/pages/providers/sparkpost-app.png";

const images: any = {
  postmark: PostMarkImage,
  amazonSes: AmazonSesImage,
  mailgun: MailgunImage,
  mailjet: MailjetImage,
  mandrill: MandrillImage,
  onesignalEmail: OnesignalImage,
  sendgrid: SendgridImage,
  smtp: SMTPImage,
  sparkpost: SparkpostImage,
};

const ProsAndCons = ({ prosAndCons }: { prosAndCons: any[] }) => (
  <Box mt={"92px"}>
    <Heading as="h2" mb="32px">
      Pros & Cons
    </Heading>
    <Box>
      {prosAndCons.map((data) => {
        return (
          <Box mb={"62px"}>
            <Flex mb={"22px"} align="center">
              <Heading as="h3" size="lg">
                {data.name}
              </Heading>
              <ExternalLinkIcon boxSize="20px" ml={2} mt={"5px"} />
            </Flex>
            <Text mt={"22px"} mb={"22px"}>
              {data.description}
            </Text>
            <Image src={images[data.id]} width={426} height={400} />
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Box mt={"32px"}>
                <Heading as="h4" size="md" mb={3}>
                  Pros
                </Heading>
                {
                  <UnorderedList>
                    {data.pros.map((pro: any) => (
                      <ListItem>{pro}</ListItem>
                    ))}
                  </UnorderedList>
                }
              </Box>
              <Box mt={"32px"}>
                <Heading as="h4" size="md" mb={3}>
                  Cons
                </Heading>
                {
                  <UnorderedList>
                    {data.cons.map((pro: any) => (
                      <ListItem>{pro}</ListItem>
                    ))}
                  </UnorderedList>
                }
              </Box>
              <Box mt={"32px"}>
                <Heading as="h4" size="md" mb={3}>
                  When To Use
                </Heading>
                {
                  <UnorderedList>
                    {data.when_to_use.map((pro: any) => (
                      <ListItem>{pro}</ListItem>
                    ))}
                  </UnorderedList>
                }
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
    <span id="company-info" />
  </Box>
);

export default ProsAndCons;
