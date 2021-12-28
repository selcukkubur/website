import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/common/Content";
import Hero from "components/pages/blog/common/Hero";
import Newsletter from "components/common/Newsletter";
import { NextSeo } from "next-seo";
import getBlogPosts, { BlogPost } from "scripts/GetBlogPosts";

export async function getStaticProps() {
  const blogPostsResponse = await getBlogPosts({ limit: 8 });
  return {
    props: {
      blogPosts: blogPostsResponse.items,
      enablePagination:
        blogPostsResponse.skip + blogPostsResponse.limit >=
        blogPostsResponse.total,
    },
    revalidate: 60,
  };
}

const Blog = ({
  blogPosts,
  enablePagination,
}: {
  blogPosts: BlogPost[];
  enablePagination: boolean;
}) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="Latest posts from the Courier developer blog."
      />
      <Header headerPlain />
      <Hero />
      <Newsletter />
      <Content blogPosts={blogPosts} enablePagination={enablePagination} />
      <Footer />
    </>
  );
};

export default Blog;
