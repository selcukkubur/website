import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/common/Content";
import Hero from "components/pages/blog/common/Hero";
import Newsletter from "components/common/Newsletter";
import { NextSeo } from "next-seo";
import getBlogPosts, { BlogPost } from "scripts/GetBlogPosts";

export async function getStaticProps() {
  const blogPosts = await getBlogPosts({ limit: 8 });
  return {
    props: { blogPosts },
    revalidate: 60,
  };
}

const Blog = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="Latest posts from the Courier developer blog."
      />
      <Header headerPlain />
      <Hero />
      <Newsletter />
      <Content blogPosts={blogPosts} />
      <Footer />
    </>
  );
};

export default Blog;
