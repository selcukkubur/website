import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/blog/Single";
import { NextSeo } from "next-seo";
import GetBlogPost from "scripts/GetBlogPost";
import getBlogPosts from "scripts/GetBlogPosts";

export async function getStaticPaths() {
  const blogPostsResponse = await getBlogPosts();
  return {
    paths: blogPostsResponse.items.map((blogPost) => ({
      params: { post: blogPost.fields.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { post } = params;

  try {
    const postDetails = await GetBlogPost({ slug: post, isPreview: false });
    return {
      props: { postDetails },
      revalidate: 60,
    };
  } catch {
    return { notFound: true };
  }
}

const Blog = ({ postDetails }: { postDetails: any }) => {
  if (!postDetails) return <p></p>;
  const { title, excerpt, headerImage, metaTitle, metaDescription } =
    postDetails;

  return (
    <>
      <NextSeo
        title={metaTitle || title}
        description={metaDescription || excerpt}
        openGraph={{
          images: [
            { url: `${headerImage.url}?w=1200&h=600&q=50&fit=pad&f=center` },
          ],
        }}
      />
      <Header headerPlain />
      <Content {...postDetails} />
      <Footer />
    </>
  );
};

export default Blog;
