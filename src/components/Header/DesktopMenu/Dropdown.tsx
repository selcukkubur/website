import React from "react";
import Image, { ImageProps } from "next/image";
import {
  Box,
  Text,
  Flex,
  Heading,
  Tag,
  SimpleGrid,
  TextProps,
  Button,
} from "@chakra-ui/react";
import MetaLink from "components/MetaLink";

interface DropdownLinkProps {
  label: string;
  link: string;
}

interface DropdownItemProps extends DropdownLinkProps {
  icon: ImageProps["src"];
}

interface DropdownItemWithDescriptionProps extends DropdownItemProps {
  description: string;
  color: string;
}

interface DropdownCardProps extends DropdownLinkProps {
  tag?: { bgColor: string; textColor: string; label: string };
  image: string;
}

export interface DropdownProps {
  title?: string;
  items?: DropdownItemProps[];
  topHighlight?: DropdownItemWithDescriptionProps;
  bottomHighlight?: DropdownLinkProps & {
    description: string;
    buttonLabel: string;
  };
  sidebar?: {
    title: string;
    items: DropdownItemProps[];
  };
  columns?: {
    title: string;
    color: string;
    items: Omit<DropdownItemWithDescriptionProps, "color">[];
  }[];
  cards?: DropdownCardProps[];
}

const DropdownTitle = (props: TextProps) => (
  <Text
    color="secondary.text"
    textTransform="uppercase"
    variant="body3"
    fontWeight={600}
    letterSpacing="1px"
    {...props}
  />
);

const DropdownItem = ({ label, icon, link }: DropdownItemProps) => (
  <MetaLink to={link}>
    <Heading
      as={Flex}
      color="secondary.text"
      fontSize={16}
      lineHeight="18px"
      fontWeight={600}
      _hover={{ color: "inherit" }}
      alignItems="center"
      transition="0.3s"
    >
      <Box mr={3}>
        <Image src={icon} />
      </Box>

      {label}
    </Heading>
  </MetaLink>
);

const DropdownItemWithDescription = ({
  color,
  label,
  description,
  icon,
  link,
}: DropdownItemWithDescriptionProps) => (
  <MetaLink to={link}>
    <Flex
      alignItems="flex-start"
      _hover={{ color }}
      transition="0.3s"
      role="group"
    >
      <Flex
        mr={4}
        w={12}
        h={12}
        pos="relative"
        flexShrink={0}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bgColor={color}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius={6}
          opacity={0.05}
        />
        <Image src={icon} />
      </Flex>
      <Box>
        <Heading fontSize="17px" lineHeight="18px" fontWeight={700} as="p">
          {label}
        </Heading>
        <Text
          mt={1}
          color="secondary.text"
          variant="body3"
          _groupHover={{ color }}
          transition="0.3s"
        >
          {description}
        </Text>
      </Box>
    </Flex>
  </MetaLink>
);

const DropdownCard = ({ tag, label, link, image }: DropdownCardProps) => (
  <MetaLink to={link}>
    <Flex
      m={"-14px"}
      p={"14px"}
      borderRadius={6}
      _hover={{ bgColor: "rgba(44, 19, 56, 0.04)" }}
      transition="0.3s"
      alignItems="center"
    >
      <Flex flexShrink={0} mr="14px" borderRadius={6} overflow="hidden">
        <Image src={image} width={70} height={70} objectFit="cover" />
      </Flex>
      <Box>
        {tag && (
          <Tag
            color={tag.textColor}
            bgColor={tag.bgColor}
            fontSize="10px"
            fontWeight="600"
            textTransform="uppercase"
            mb={1}
          >
            {tag.label}
          </Tag>
        )}
        <Heading fontSize={15} lineHeight="20px" as="p">
          {label}
        </Heading>
      </Box>
    </Flex>
  </MetaLink>
);

const DropdownButton = ({ label, link }: DropdownLinkProps) => (
  <MetaLink to={link}>
    <Button
      variant="outline"
      colorScheme="secondary.dark"
      fontSize={13}
      _hover={{ bgColor: "rgba(44, 19, 56, 0.05)" }}
    >
      {label}
    </Button>
  </MetaLink>
);

const Dropdown = ({
  title,
  sidebar,
  columns,
  cards,
  items,
  topHighlight,
  bottomHighlight,
}: DropdownProps) => {
  return (
    <Box color="secondary.dark">
      <Flex>
        {sidebar && (
          <Box py="30px" px="34px" width="220px">
            <DropdownTitle>{sidebar.title}</DropdownTitle>

            {sidebar.items.map((item, index) => (
              <Box key={index} mt={6}>
                <DropdownItem {...item} />
              </Box>
            ))}
          </Box>
        )}

        <Box
          py="30px"
          px="34px"
          bgColor={sidebar ? "#F9FAFD" : undefined}
          borderRightRadius={24}
          flexGrow={1}
        >
          {topHighlight && (
            <Box mb={6}>
              <DropdownItemWithDescription {...topHighlight} />
            </Box>
          )}

          {title && <DropdownTitle>{title}</DropdownTitle>}

          {items && (
            <SimpleGrid columns={2} width="400px">
              {items.map((item, index) => (
                <Box key={index} mt={6}>
                  <DropdownItem {...item} />
                </Box>
              ))}
            </SimpleGrid>
          )}

          {cards && (
            <Box width="400px">
              {cards.map((card, index) => (
                <Box key={index} mt={6}>
                  <DropdownCard {...card} />
                </Box>
              ))}
            </Box>
          )}

          {columns && (
            <Flex>
              {columns.map((column, index) => (
                <Box key={index} flexGrow={1} width="400px" flexShrink={0}>
                  <DropdownTitle>{column.title}</DropdownTitle>

                  {column.items.map((item, index) => (
                    <Box mt={6} key={index}>
                      <DropdownItemWithDescription
                        color={column.color}
                        {...item}
                      />
                    </Box>
                  ))}
                </Box>
              ))}
            </Flex>
          )}
        </Box>
      </Flex>

      {bottomHighlight && (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          bgColor="#F9FAFD"
          borderBottomRadius={16}
          p="34px"
        >
          <MetaLink to={bottomHighlight.link}>
            <Box _hover={{ opacity: 0.8 }} transition="0.3s opacity">
              <Heading fontSize="24px" as="p">
                {bottomHighlight.label}
              </Heading>
              <Text color="secondary.text" variant="body3" mt="10px">
                {bottomHighlight.description}
              </Text>
            </Box>
          </MetaLink>
          <Box>
            <DropdownButton
              label={bottomHighlight.buttonLabel}
              link={bottomHighlight.link}
            />
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Dropdown;
