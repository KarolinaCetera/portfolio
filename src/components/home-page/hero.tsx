import Image from "next/image";
import ContactData from "@component/components/home-page/contact-data";
import image from "../../../public/image.png";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.home}>
      <div className={classes.hero}>
        <div className={classes.image}>
          <Image src={image} alt="Profile photo" width={200} height={200} />
        </div>
        <h1>{"Hi! I'm Karolina Cetera"}</h1>
      </div>
      <div className={classes.info}>
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
        <ContactData />
      </div>
    </section>
  );
};

export default Hero;
