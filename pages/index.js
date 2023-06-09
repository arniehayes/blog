import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/pageStyles/HomePage.module.scss";
import Article from "@/components/Article";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  return (
    <>
      <Head>
        <title>The Daily Buzz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article
        title={articleContent?.title}
        paragraph={articleContent?.paragraph}
        subTitle={articleContent?.subTitle}
      />
      <Sidebar />
      <Footer />
    </>
  );
}
