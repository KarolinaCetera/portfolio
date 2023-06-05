import TechElement from "@component/components/about/tech-element";
import classes from "./about-section.module.scss";
import { FC } from "react";
import { TechElementType } from "@component/typings";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TechElementName } from "@component/components/about/about";
import { useGetData } from "@component/api-utils/api-call";

interface AboutSectionProps {
  name: TechElementName;
  title: string;
}

const AboutSection: FC<AboutSectionProps> = ({ name, title }) => {
  const { data, isLoading, isError, error } =
    useGetData<TechElementType[]>(name);

  if (isLoading) return <CircularProgress sx={{ margin: "1rem auto" }} />;
  if (isError && error && !data) {
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
          data?.map((element) => (
            <TechElement key={element.name} element={element} />
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AboutSection;
