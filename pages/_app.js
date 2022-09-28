import React, { useEffect } from "react";

import { analytics } from "@/libs/firebase";
import Providers from '@/contexts/providers';

import '@/styles/global.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
  }, []);

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp;
