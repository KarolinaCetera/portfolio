import Image from "next/image";
import classes from "./tech-element.module.scss";
import { FC } from "react";
import { TechElementType } from "@component/typings";

interface TechElementProps {
  element: TechElementType;
}

const TechElement: FC<TechElementProps> = ({ element }) => {
  return (
    <div className={classes.techElement}>
      <div className={classes.elementTitle}>
        <Image src={element.icon} alt="react" width={60} height={60} />
        <h3>{element.name}</h3>
      </div>
      <div>
        <p>{element.description}</p>
      </div>
    </div>
  );
};

export default TechElement;