import TechElement from "@component/components/about/tech-element";
import classes from "./about-section.module.scss";
import { FC, useEffect } from "react";
import { TechElementType } from "@component/typings";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useSWR from "swr";
import { TechElementName } from "@component/components/about/about";

interface AboutSectionProps {
  name: TechElementName;
  title: string;
}

const AboutSection: FC<AboutSectionProps> = ({ name, title }) => {
  const fetcher = async (): Promise<{ [key: string]: TechElementType[] }> => {
    const response = await fetch(`http://localhost:3000/api/data/${name}`);
    return await response.json();
  };

  const { data, error, isLoading } = useSWR(title, fetcher);

  if (isLoading) return <CircularProgress sx={{ margin: "1rem auto" }} />;
  if (error && !data) {
    return <p>There was a problem... Try again!</p>;
  }

  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{ background: "#DFDBE6FF", mb: 2 }}
    >
      <AccordionSummary
        className={classes.title}
        expandIcon={<ExpandMoreIcon />}
      >
        <h2>{title}</h2>
      </AccordionSummary>
      <AccordionDetails className={classes.section}>
        {data &&
          data[name].map((element) => (
            <TechElement key={element.name} element={element} />
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AboutSection;
