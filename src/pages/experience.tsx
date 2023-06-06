import { FC } from "react";
import Experience from "@component/components/experience/experience";
import { ExperienceElementType } from "@component/typings";
import { CircularProgress } from "@mui/material";
import { fetcher, useGetData } from "@component/api-utils/api-call";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface ExperiencePageProps {
  experience: ExperienceElementType[];
  error: {
    code: number;
    message: string;
  } | null;
}

const ExperiencePage: FC<ExperiencePageProps> = ({ experience, error }) => {
  const { t } = useTranslation("common");

  if (error) {
    return <p>{t(error.message)}</p>;
  }

  return <Experience experience={experience || []} />;
};

export const getServerSideProps: GetServerSideProps<
  ExperiencePageProps
> = async ({ locale }) => {
  const response = await fetch(
    `https://portfolio-api-production-2977.up.railway.app/experience`
  );
  const errorCode = response.ok
    ? false
    : (response as unknown as { statusCode: number }).statusCode;
  const experience = await response.json();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      experience,
      error: errorCode
        ? {
            code: errorCode,
            message: "error",
          }
        : null,
    },
  };
};

export default ExperiencePage;
