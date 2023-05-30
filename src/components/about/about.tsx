import classes from "./about.module.scss";
import { other, softSkills, techStack } from "@component/consts";
import AboutSection from "@component/components/about/about-section";

const About = () => {
  return (
    <section className={classes.about}>
      <h1>About me</h1>
      <AboutSection elements={techStack} title="Tech stack" />
      <AboutSection elements={softSkills} title="Soft skills" />
      <AboutSection elements={other} title="...and all not IT related" />
    </section>
  );
};

export default About;
