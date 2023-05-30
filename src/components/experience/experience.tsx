import { useState } from "react";
import { experienceElements } from "@component/consts";
import ExperienceSection from "@component/components/experience/experience-section";
import { useMediaQuery } from "@mui/material";
import Carousel from "@component/components/experience/carousel";
import classes from "./experience.module.scss";

const Experience = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === experienceElements.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(experienceElements.length - 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <section className={classes.experience}>
      <h1>Experience</h1>
      {matches ? (
        <Carousel
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      ) : (
        <>
          {experienceElements.map((element) => (
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
