import DownloadIcon from "@mui/icons-material/Download";
import linkedin from "../../../public/tech/linkedin.png";
import github from "../../../public/tech/github.png";
import SocialLink from "@component/components/contact/social-link";
import classes from "./social.module.scss";

const Social = () => {
  return (
    <>
      <div className={classes.social}>
        <SocialLink
          href="https://www.linkedin.com/in/karolina-cetera/"
          image={linkedin}
          title="LinkedIn"
        />
        <SocialLink
          href="https://github.com/KarolinaCetera"
          image={github}
          title="GitHub"
        />
      </div>
      <div className={classes.cv}>
        <h3>Download CV</h3>
        <DownloadIcon fontSize="large" />
      </div>
    </>
  );
};

export default Social;
