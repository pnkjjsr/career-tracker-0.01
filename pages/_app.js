import React, { useEffect } from "react";

import { analytics } from "@/libs/firebase";

import '@/styles/global.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
  }, []);

  return <Component {...pageProps} />
}

export default MyApp;
