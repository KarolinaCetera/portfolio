import { FC } from "react";
import { ExperienceElementType } from "@component/typings";
import classes from "./experience-element.module.scss";

interface ExperienceElementProps {
  element: ExperienceElementType;
}

const ExperienceElement: FC<ExperienceElementProps> = ({ element }) => {
  return (
    <div className={classes.element}>
      <h2>{element.companyName}</h2>
      <h3>{element.period}</h3>
      <p>Stack: {element.stack}</p>
      <ul>
        {element.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceElement;
