import AboutSection from "@component/components/about/about-section";
import classes from "./about.module.scss";

export enum TechElementName {
  TECH_STACK = "techStack",
  SOFT_SKILLS = "softSkills",
  OTHER = "other",
}

const About = () => {
  return (
    <section className={classes.about}>
      <h1>About me</h1>
      <AboutSection name={TechElementName.TECH_STACK} title="Tech Stack" />
      <AboutSection name={TechElementName.SOFT_SKILLS} title="Soft skills" />
      <AboutSection name={TechElementName.OTHER} title="Other" />
    </section>
  );
};

export default About;
