import Image from "next/image";
import ContactData from "@component/components/home-page/contact-data";
import image from "../../../public/image.png";
import classes from "./hero.module.scss";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={classes.home}>
      <div className={classes.hero}>
        <div className={classes.image}>
          <Image src={image} alt="Profile photo" width={200} height={200} />
        </div>
        <h1>{t("hero")}</h1>
      </div>
      <div className={classes.info}>
        <div className={classes.intro}>
          <p>{t("heroIntro")}</p>
          <hr />
          <p>{t("heroDescription")}</p>
        </div>
        <ContactData />
      </div>
    </section>
  );
};

export default Hero;
