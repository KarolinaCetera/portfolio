import classes from "./contact-data.module.scss";
import Social from "@component/components/home-page/social";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactData = () => {
  return (
    <div className={classes.contactData}>
      <h2>Contact me:</h2>
      <div className={classes.dataContainer}>
        <EmailIcon className={classes.icon} />
        <a href="mailto:karolina.cetera@gmail.com">karolina.cetera@gmail.com</a>
      </div>
      <div className={classes.dataContainer}>
        <LocalPhoneIcon className={classes.icon} />
        <span>+48 791 264 502</span>
      </div>
      <Social />
    </div>
  );
};

export default ContactData;
