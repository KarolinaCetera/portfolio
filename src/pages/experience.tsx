import { FC } from "react";
import Experience from "@component/components/experience/experience";
import { ExperienceElementType } from "@component/typings";
import { CircularProgress } from "@mui/material";
import { useGetData } from "@component/api-utils/api-call";

interface ExperiencePageProps {
  experience: ExperienceElementType[];
}

const ExperiencePage: FC<ExperiencePageProps> = ({ experience }) => {
  const { data, isLoading, isError, error } =
    useGetData<ExperienceElementType[]>("experience");

  if (isLoading) return <CircularProgress sx={{ margin: "1rem auto" }} />;
  if (isError && error) {
    return <p>There was a problem... Try again!</p>;
  }

  return <Experience experience={data || []} />;
};

export default ExperiencePage;
