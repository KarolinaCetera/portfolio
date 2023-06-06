import { FC } from "react";
import Image from "next/image";
import { TechElementType } from "@component/typings";
import classes from "./tech-element.module.scss";
import { useTranslation } from "next-i18next";

interface TechElementProps {
  element: TechElementType;
}

const TechElement: FC<TechElementProps> = ({ element }) => {
  const { t } = useTranslation("common");

  return (
    <div className={classes.techElement}>
      <div className={classes.elementTitle}>
        <Image src={element.icon} alt="react" width={60} height={60} />
        <h3>{t(element.name)}</h3>
      </div>
      <div>
        <p>{t(element.description)}</p>
      </div>
    </div>
  );
};

export default TechElement;
