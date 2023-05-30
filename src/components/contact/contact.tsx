import ContactData from "@component/components/contact/contact-data";
import classes from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <h1>Contact me</h1>
      <ContactData />
    </section>
  );
};

export default Contact;
