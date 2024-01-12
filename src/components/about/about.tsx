import AboutSection from "@component/components/about/about-section";
import classes from "./about.module.scss";
import { useTranslation } from "next-i18next";

export enum TechElementName {
  TECH_STACK = "techStack",
  SOFT_SKILLS = "softSkills",
  OTHER = "other",
}

const About = () => {
  const { t } = useTranslation("common");

  return (
    <section className={classes.about}>
      <h2>{t("about")}</h2>
      <AboutSection name={TechElementName.TECH_STACK} />
      <AboutSection name={TechElementName.SOFT_SKILLS} />
    </section>
  );
};

export default About;
