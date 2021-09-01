import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/home/Content";
import Hero from "components/pages/blog/home/Hero";
import Newsletter from "components/common/Newsletter";
import { NextSeo } from "next-seo";
import GetBlogsHomeFeed from "scripts/GetBlogsHomeFeed";

export async function getStaticProps(context: any) {
  const feedContent = await GetBlogsHomeFeed();
  return {
    props: { feedContent },
    revalidate: 60,
  };
}

const Blog = ({ feedContent }: { feedContent: any }) => {
  if (!feedContent) return <p></p>;

  return (
    <>
      <NextSeo
        title="Blog"
        description="Latest posts from Courier.com's blog."
      />
      <Header headerPlain />
      <Hero />
      <Newsletter />
      <Content feedContent={feedContent} />
      <Footer />
    </>
  );
};

export default Blog;
