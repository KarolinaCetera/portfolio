import TechElement from "@component/components/about/tech-element";
import classes from "./about-section.module.scss";
import { FC } from "react";
import { TechElementType } from "@component/typings";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AboutSectionProps {
  elements: TechElementType[];
  title: string;
}

const AboutSection: FC<AboutSectionProps> = ({ elements, title }) => {
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
        {elements.map((element) => (
          <TechElement key={element.name} element={element} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AboutSection;
