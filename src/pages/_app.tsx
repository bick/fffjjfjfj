import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import "@/styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/components/shared/Layout";
import AnnouncementContext from "@/lib/announcementContext";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isAnnouncementVisible, setAnnouncementVisible] = useState(true);

  return (
    <Layout>
      <NextNProgress
        color="#fb432c"
        startPosition={0.3}
        height={2}
        showOnShallow={false}
      />

      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
};

export default MyApp;
