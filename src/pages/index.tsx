import Hero from "@component/components/home-page/hero";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <Hero />;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default HomePage;
