import { useCallback } from "react";
import { Flex, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Search from "./Search";

const Mobile = ({ data, slug }: { data: any[]; slug: string }) => {
  const router = useRouter();

  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      router.push(
        event.currentTarget.value === "home"
          ? `/blog`
          : `/blog/tags/${event.currentTarget.value}`
      );
    },
    []
  );

  return (
    <Flex
      p="0 20px"
      w={{ base: "100%", md: "70%", lg: "60%" }}
      justify="flex-start"
      mb={4}
      float="right"
    >
      <Search mr={4} />
      <Select value={slug} onChange={handleSelect}>
        {data.map((menu) => (
          <option value={menu.slug} key={menu.slug}>
            {menu.name}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default Mobile;
