import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData, PostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // [...id].tsx のような指定方法だと params.id はリストになる
  // cf. https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
  // cf. https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

// cf. https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    // cf. https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
    // cf. https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
    fallback: false,
  };
};

interface PostProps {
  postData: PostData;
}
export const Post: React.FC<PostProps> = ({ postData }: PostProps) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
