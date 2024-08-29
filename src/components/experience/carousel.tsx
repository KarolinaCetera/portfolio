import { FC } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import ExperienceElement from "./experience-element";
import classes from "./carousel.module.scss";
import { ExperienceElementType } from "@component/typings";

interface CarouselProps {
  experience: ExperienceElementType[];
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}

const Carousel: FC<CarouselProps> = ({
  experience,
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
        {experience?.map((element, index) => (
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
