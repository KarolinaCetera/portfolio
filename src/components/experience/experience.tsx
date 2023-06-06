import { FC, useState } from "react";
import ExperienceSection from "@component/components/experience/experience-section";
import { useMediaQuery } from "@mui/material";
import Carousel from "@component/components/experience/carousel";
import classes from "./experience.module.scss";
import { ExperienceElementType } from "@component/typings";
import { useTranslation } from "next-i18next";

interface ExperienceProps {
  experience: ExperienceElementType[];
}

const Experience: FC<ExperienceProps> = ({ experience }) => {
  const { t } = useTranslation("common");
  const matches = useMediaQuery("(min-width:768px)");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === experience.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(experience.length - 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <section className={classes.experience}>
      <h1>{t("experience")}</h1>
      {matches ? (
        <Carousel
          experience={experience}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      ) : (
        <>
          {experience.map((element) => (
            <ExperienceSection
              experienceElement={element}
              key={element.companyName}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Experience;
