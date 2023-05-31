import { FC } from "react";
import Experience from "@component/components/experience/experience";
import { ExperienceElementType } from "@component/typings";
import useSWR from "swr";
import { CircularProgress } from "@mui/material";

const getExperience = async (): Promise<{
  experience: ExperienceElementType[];
}> => {
  const response = await fetch("http://localhost:3000/api/data/experience");
  return await response.json();
};

interface ExperiencePageProps {
  experience: ExperienceElementType[];
}

const ExperiencePage: FC<ExperiencePageProps> = ({ experience }) => {
  const { data, error, isLoading } = useSWR("experience", getExperience);

  if (isLoading) return <CircularProgress sx={{ margin: "1rem auto" }} />;
  if (error && !data) {
    return <p>There was a problem... Try again!</p>;
  }

  return <Experience experience={data?.experience || []} />;
};

export default ExperiencePage;
