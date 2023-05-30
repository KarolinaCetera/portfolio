import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@component/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
