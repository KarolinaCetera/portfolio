import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@component/components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import "../../next-i18next.config";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Karolina Cetera - frontend Developer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
