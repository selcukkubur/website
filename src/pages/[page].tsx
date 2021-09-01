import Header from "components/Header/index";
import Footer from "components/Footer";
import Content from "components/pages/page/Content";
import { NextSeo } from "next-seo";
import GetPageData from "scripts/GetPageData";
import getAllPages from "scripts/GetAllPages";

import { widgetQueries } from "components/pages/page/widgets";

export async function getStaticPaths() {
  const allPages = await getAllPages();
  const allPagesPath = [];
  for (let index = 0; index < allPages.length; index++) {
    const page = allPages[index];
    allPagesPath.push({
      params: { page: page.fields.slug },
    });
  }
  return {
    paths: allPagesPath,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { page } = params;
  const pageDetails = await GetPageData({ slug: page });
  const widgetsData: Record<string, any> = {};
  await Promise.all(
    pageDetails.content.links.entries.block.map(async (block) => {
      if (!block.key || !widgetQueries[block.key]) return;

      const data = await widgetQueries[block.key]();
      widgetsData[block.key] = data;
    })
  );

  return {
    props: { pageDetails, widgetsData },
  };
}

const GeneratedPage = ({
  pageDetails,
  widgetsData,
}: {
  pageDetails: any;
  widgetsData: Record<string, any>;
}) => {
  if (!pageDetails) return <p></p>;
  const { content, title, metaTitle, metaDescription } = pageDetails;

  return (
    <>
      <NextSeo title={metaTitle || title} description={metaDescription} />
      <Header headerPlain />
      <Content content={content} widgetsData={widgetsData} title={title} />
      <Footer cta="none" />
    </>
  );
};

export default GeneratedPage;
