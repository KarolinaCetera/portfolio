import classes from "./hero.module.scss";
import Image from "next/image";
import image from "../../../public/image.png";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={image} alt="Profile photo" width={200} height={200} />
      </div>
      <h1>{"Hi! I'm Karolina Cetera"}</h1>
      <div className={classes.intro}>
        <p>
          I am Web Developer focused on working with React ecosystem and
          creating backend in Node.js.
        </p>
        <hr />
        <p>
          I am experienced in creating web application using best coding
          practices, project patterns and optimization techniques
        </p>
      </div>
    </section>
  );
};

export default Hero;
