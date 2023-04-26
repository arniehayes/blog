import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Title from "@/components/Title";
import React from "react";
import ReactMarkdown from "react-markdown";
import style from "../../styles/pageStyles/Post.module.scss"
const { client, getContentData } = require("../../contentful");

const Post = (props) => {
  console.log(props);

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <Title text={props?.fields?.title} />
        <Hero
          src={props?.fields?.featuredImage?.fields?.file?.url}
          alt={props?.fields?.featuredImage?.fields?.title}
        />
        <div className={style.markdownContainer}>
          <ReactMarkdown className={style.markDown}>{props?.fields?.testContent}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const {
    items: [articleEntry = {}],
  } = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug[in]": params.post,
    limit: 1,
    include: 10,
  });

  return {
    props: { ...articleEntry },
  };
}

export async function getStaticPaths() {
  const { items: articleItems = [] } = await client.getEntries({
    content_type: "pageBlogPost",
    limit: 100,
    include: 10,
  });

  const paths = articleItems.map(({ fields: { slug = "" } = {} }) => ({
    params: { post: slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
