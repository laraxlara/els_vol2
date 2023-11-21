import React from "react";
// import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import FAQ from "@/sections/FAQ";
import Footer from "@/components/Footer";
import { PropTypes } from "prop-types";

const Layout = ({ children }) => {
  // const router = useRouter();

  // useEffect(() => {
  //   // Initialize Google Tag Manager
  //   const initializeGTM = () => {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag() {
  //       window.dataLayer.push(arguments);
  //     }
  //     gtag("js", new Date());
  //     gtag("config", `${process.env.NEXT_PUBLIC_GOOGLE_ADS}`);
  //   };

  //   initializeGTM();

  //   // Track page view on route change
  //   const handleRouteChange = (url) => {
  //     window.dataLayer.push({ event: "page_view", page: url });
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
    page_path: window.location.pathname
  });`,
          }}
        ></script>

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS}', {
    page_path: window.location.pathname
  });`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': '${process.env.NEXT_PUBLIC_CONVERSION_ID}/${process.env.NEXT_PUBLIC_CONVERSION_LABEL}'
              });
            `,
          }}
        />
      </Head>
      <div className="home-page-container">
        <div className="h-[200px] py-[50px]">
          <video autoPlay loop muted src={"/videos/video.mp4"} />
        </div>
        <Navbar />
        <main className="relative z-1">{children}</main>
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
