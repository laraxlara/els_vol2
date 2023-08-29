import React from "react";
import Head from "next/head";
import BlogLayout from "@/layouts/blogLayout";
import BlogCard from "@/components/BlogCard";
import services from "../../public/images/service/s4.png";

const Blog = () => {
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + "...";
  };

  const description =
    "Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs. Our mission is to provide our clients the best possible experience with our comfortable and safe ride. We are constantly elevating our service because our clients are our number one priority.";

  return (
    <>
      <Head>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Blog | Executive Limo Service | Limo Service Miami</title>
          <meta name="description" content={truncateString(description, 150)} />
          <link rel="icon" href="/images/favicon.png" sizes="any" />
          <meta name="language" content="en" />

          <meta
            property="og:title"
            content="Executive Limo Service Miami | Luxury Car Rental"
          />
          <meta
            property="og:description"
            content="Executive Limo Service in Miami offers luxury car rentals for various occasions. Choose from our premium fleet and enjoy first-class transportation."
          />
          <meta property="og:image" content="/images/og.png" />
          <meta property="og:url" content="https://executivelimomiami.com/" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="/images/og.png" />
          <meta
            name="twitter:title"
            content="Executive Limo Service Miami | Luxury Car Rental"
          />
          <meta
            name="twitter:description"
            content="Executive Limo Service in Miami offers luxury car rentals for various occasions. Choose from our premium fleet and enjoy first-class transportation."
          />
          <meta name="twitter:image" content="/images/og.png" />
          <link rel="canonical" href="https://executivelimomiami.com/blog/" />
        </Head>
      </Head>
      <BlogLayout>
        <BlogCard src={services} alt="The man enjoying a limo ride" />
      </BlogLayout>
    </>
  );
};

export default Blog;
