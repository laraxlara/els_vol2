import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { PropTypes } from "prop-types";
import Router from "next/router";
import PageLoader from "@/components/PageLoader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
