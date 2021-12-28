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

  const blogPostsResponse = await GetBlogPosts({
    limit: 7,
    tagId: blogTag.sys.id,
  });

  return {
    props: {
      blogPosts: blogPostsResponse.items,
      tag: blogTag,
      enablePagination:
        blogPostsResponse.skip + blogPostsResponse.limit >=
        blogPostsResponse.total,
    },
    revalidate: 60,
  };
}

const Blog = ({
  blogPosts,
  tag,
  enablePagination,
}: {
  blogPosts: BlogPost[];
  tag: BlogPostTag;
  enablePagination: boolean;
}) => {
  return (
    <>
      <NextSeo title={tag.fields.name} noindex />
      <Header headerPlain />
      <Hero slug={tag.fields.slug} />
      <Newsletter />
      <Content
        key={tag.sys.id}
        blogPosts={blogPosts}
        slug={tag.fields.slug}
        tagId={tag.sys.id}
        enablePagination={enablePagination}
      />
      <Footer />
    </>
  );
};

export default Blog;
