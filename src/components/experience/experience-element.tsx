import { FC } from "react";
import { ExperienceElementType } from "@component/typings";
import classes from "./experience-element.module.scss";
import { useTranslation } from "next-i18next";

interface ExperienceElementProps {
  element: ExperienceElementType;
}

const ExperienceElement: FC<ExperienceElementProps> = ({ element }) => {
  const { t } = useTranslation("common");

  const points = t(element.points[0]).split("_");
  return (
    <div className={classes.element}>
      <h2>{element.companyName}</h2>
      <h3>{element.period}</h3>
      <p>Stack: {element.stack}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceElement;
