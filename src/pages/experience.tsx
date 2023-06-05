import { FC, useEffect } from "react";
import Experience from "@component/components/experience/experience";
import { ExperienceElementType, TechElementType } from "@component/typings";
import useSWR from "swr";
import { CircularProgress } from "@mui/material";
import { fetcher } from "@component/api-utils/api-call";
import { useQuery } from "react-query";

interface ExperiencePageProps {
  experience: ExperienceElementType[];
}

const ExperiencePage: FC<ExperiencePageProps> = ({ experience }) => {
  const getExperience = () => fetcher<ExperienceElementType[]>(`experience`);

  const { data, isLoading, isError, error } = useQuery(
    ["experience"],
    getExperience
  );
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (isLoading) return <CircularProgress sx={{ margin: "1rem auto" }} />;
  if (isError && error) {
    return <p>There was a problem... Try again!</p>;
  }

  return <Experience experience={[]} />;
};

export default ExperiencePage;
