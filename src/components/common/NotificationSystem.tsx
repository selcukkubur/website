import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Container from "components/Container";

interface NotificationPointProps {
  title: string;
  icon: { src: string; height: number; width: number };
  description: string;
}

interface NotificationSystemProps {
  title: string;
  description: string;
  points: NotificationPointProps[];
}

const NotificationPoint = ({
  title,
  icon,
  description,
}: NotificationPointProps) => (
  <Box
    w={{ base: "100%", md: "50%", lg: 0 }}
    flexGrow={{ lg: 1 }}
    mb={{ base: "62px", md: "72px", lg: 0 }}
    px={5}
    maxW={{ xl: "360px" }}
  >
    <Image src={icon} alt={title} />

    <Heading variant="subh1" mt="32px" mb="10px">
      {title}
    </Heading>

    <Text variant="body3" color="rgba(255, 255, 255, 0.8)">
      {description}
    </Text>
  </Box>
);

const NotificationSystem = ({
  title,
  description,
  points,
}: NotificationSystemProps) => {
  return (
    <Container position="relative" zIndex="1">
      <Box
        mt={{ base: "92px", lg: "132px" }}
        color="white"
        p={{
          base: "64px 40px 38px",
          lg: "60px 50px 110px 30px",
          xl: "90px 80px 110px",
        }}
        borderRadius="24px"
        background={{
          base: "url(/images/notificationBg-Mobile.svg) 0 0 no-repeat #2c1338",
          lg: "url(/images/notificationBg.svg) 0 0 no-repeat #2c1338",
        }}
        backgroundSize="cover"
      >
        <Heading variant="h2">{title}</Heading>

        <Text variant="body1" mt={6} color="rgba(255, 255, 255, 0.8)">
          {description}
        </Text>

        <Flex
          mt={{ base: "92px", lg: "118px" }}
          mx={-5}
          justify="space-between"
          flexWrap="wrap"
        >
          {points.map((point) => (
            <NotificationPoint
              key={point.title}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default NotificationSystem;
