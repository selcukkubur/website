import { useEffect, useRef, useState } from "react";
import qs from "qs";
import { Flex } from "@chakra-ui/react";
import type { BlogPost } from "scripts/GetBlogPosts";
import Menu from "../common/Menu";
import Feed from "./Feed";

const Content = ({
  blogPosts,
  slug,
  tagId,
  enablePagination,
}: {
  blogPosts: BlogPost[];
  slug?: string;
  tagId?: string;
  enablePagination: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentPageRef = useRef<number>(0);
  const paginationDoneRef = useRef(enablePagination);
  const [fetching, setFetching] = useState(false);
  const [paginatedBlogPosts, setPaginatedBlogPosts] = useState(blogPosts);

  useEffect(() => {
    const handleScroll = () => {
      if (
        paginationDoneRef.current ||
        fetching ||
        !containerRef.current ||
        document.documentElement.scrollTop +
          document.documentElement.clientHeight / 2 <
          containerRef.current.offsetTop + containerRef.current.offsetHeight
      ) {
        return;
      }

      setFetching(true);

      fetch(
        `/api/blog-pagination?${qs.stringify({
          page: currentPageRef.current,
          tagId,
        })}`
      )
        .then((response) => response.json())
        .then((body) => {
          currentPageRef.current += 1;
          paginationDoneRef.current = body.done;

          setPaginatedBlogPosts((posts) => [...posts, ...body.posts]);
        })
        .catch(() => {})
        .then(() => setFetching(false));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetching]);

  return (
    <Flex
      ref={containerRef}
      maxW="1240px"
      mx="auto"
      mt={{ base: "92px", lg: "92px", xl: "142px" }}
      direction={{ base: "column", xl: "row" }}
    >
      <Menu slug={slug || "home"} />
      <Feed
        loading={fetching}
        blogPosts={paginatedBlogPosts}
        showHighlights={!slug}
      />
    </Flex>
  );
};

export default Content;
