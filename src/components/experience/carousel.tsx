import { FC } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { experienceElements } from "@component/consts";
import ExperienceElement from "./experience-element";
import classes from "./carousel.module.scss";

interface CarouselProps {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}

const Carousel: FC<CarouselProps> = ({
  activeStep,
  handleBack,
  handleNext,
}) => {
  return (
    <div className={classes.carouselContainer}>
      <KeyboardArrowLeft
        className={classes.carouselButton}
        onClick={handleBack}
        fontSize="large"
      />
      <div className={classes.carousel}>
        {experienceElements.map((element, index) => (
          <div
            key={element.companyName}
            className={classes.slide}
            style={{ transform: `translate(-${activeStep * 100}%` }}
          >
            <ExperienceElement element={element} />
          </div>
        ))}
      </div>
      <KeyboardArrowRight
        className={classes.carouselButton}
        onClick={handleNext}
        fontSize="large"
      />
    </div>
  );
};

export default Carousel;
