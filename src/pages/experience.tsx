import { FC } from "react";
import Experience from "@component/components/experience/experience";
import { ExperienceElementType, TechElementType } from "@component/typings";
import useSWR from "swr";
import { CircularProgress } from "@mui/material";
import { fetcher } from "@component/api-utils/api-call";

interface ExperiencePageProps {
  experience: ExperienceElementType[];
}

const ExperiencePage: FC<ExperiencePageProps> = ({ experience }) => {
  const getExperience = () =>
    fetcher<{ [key: string]: ExperienceElementType[] }>(`/api/data/experience`);

  const { data, error, isLoading } = useSWR("experience", getExperience);

  if (isLoading) return <CircularProgress sx={{ margin: "1rem auto" }} />;
  if (error && !data) {
    return <p>There was a problem... Try again!</p>;
  }

  return <Experience experience={data?.experience || []} />;
};

export default ExperiencePage;
