import { GetStaticPropsContext } from "next";
import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/common/Content";
import Hero from "components/pages/blog/common/Hero";
import { NextSeo } from "next-seo";
import GetBlogTag, { BlogPostTag } from "scripts/GetBlogTag";
import GetBlogPosts, { BlogPost } from "scripts/GetBlogPosts";
import Newsletter from "components/common/Newsletter";

export async function getStaticPaths() {
  const allTagPaths = [
    { params: { tag: "courier" } },
    { params: { tag: "courier-live" } },
    { params: { tag: "engineering" } },
    { params: { tag: "integrations" } },
    { params: { tag: "news-and-updates" } },
    { params: { tag: "notifications-landscape" } },
  ];
  return {
    paths: allTagPaths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ tag: string }>
) {
  const { params } = context;
  const blogTag = params?.tag ? await GetBlogTag(params?.tag) : null;

  if (!blogTag) return { notFound: true };

  const blogPosts = await GetBlogPosts({ limit: 7, tagId: blogTag.sys.id });

  return {
    props: { blogPosts, tag: blogTag },
    revalidate: 60,
  };
}

const Blog = ({
  blogPosts,
  tag,
}: {
  blogPosts: BlogPost[];
  tag: BlogPostTag;
}) => {
  return (
    <>
      <NextSeo title={tag.fields.name} noindex />
      <Header headerPlain />
      <Hero slug={tag.fields.slug} />
      <Newsletter />
      <Content blogPosts={blogPosts} slug={tag.fields.slug} />
      <Footer />
    </>
  );
};

export default Blog;
