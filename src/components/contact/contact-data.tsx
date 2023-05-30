import mail from "../../../public/tech/mail.png";
import phone from "../../../public/tech/phone.png";
import Image from "next/image";
import classes from "./contact-data.module.scss";
import Social from "@component/components/contact/social";

const ContactData = () => {
  return (
    <div>
      <div className={classes.title}>
        <h3>Karolina Cetera - Frontend Developer</h3>
      </div>
      <div className={classes.dataContainer}>
        <Image src={mail} alt="mail" width={30} height={30} />
        <a href="mailto:karolina.cetera@gmail.com">karolina.cetera@gmail.com</a>
      </div>
      <div className={classes.dataContainer}>
        <Image src={phone} alt="mail" width={30} height={30} />
        <span>+48 791 264 502</span>
      </div>
      <Social />
    </div>
  );
};

export default ContactData;
