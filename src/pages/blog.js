import React from "react";
import Head from "next/head";
import BlogLayout from "@/layouts/blogLayout";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Executive Limo Service</title>
        <meta
          name="description"
          content="Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs. Our mission is to provide our clients the best possible experience with our comfortable and safe ride."
          key="desc"
        />
      </Head>
      <BlogLayout>
        <BlogCard />
      </BlogLayout>
    </>
  );
};

export default Blog;
