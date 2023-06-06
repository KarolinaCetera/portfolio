import About from "@component/components/about/about";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <About />;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default AboutPage;
