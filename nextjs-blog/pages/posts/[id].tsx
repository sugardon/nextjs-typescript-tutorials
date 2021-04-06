import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData, PostData } from "../../lib/posts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

interface PostProps {
  postData: PostData;
}
export const Post: React.FC<PostProps> = (props: PostProps) => {
  return (
    <Layout>
      {props.postData.title}
      <br />
      {props.postData.id}
      <br />
      {props.postData.date}
      <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
