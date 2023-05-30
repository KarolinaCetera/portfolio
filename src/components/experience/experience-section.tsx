import { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExperienceElement from "./experience-element";
import { ExperienceElementType } from "@component/typings";
import classes from "./experience-section.module.scss";

interface ExperienceSectionProps {
  experienceElement: ExperienceElementType;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({
  experienceElement,
}) => {
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
        <h2>{experienceElement.companyName}</h2>
      </AccordionSummary>
      <AccordionDetails>
        <ExperienceElement element={experienceElement} />
      </AccordionDetails>
    </Accordion>
  );
};

export default ExperienceSection;
