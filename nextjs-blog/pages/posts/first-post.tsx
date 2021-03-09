import Head from "next/head";
import Link from "next/link";
import React from "react";
import {Layout} from "../../components/layout";

export const FirstPost: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title> First Post </title>
      </Head>
      <h1> FirstPost </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
