import DownloadIcon from "@mui/icons-material/Download";
import classes from "./social.module.scss";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Social = () => {
  return (
    <div className={classes.social}>
      <Link
        className={classes.socialLink}
        href="https://www.linkedin.com/in/karolina-cetera/"
      >
        <LinkedInIcon fontSize="large" />
      </Link>
      <Link
        className={classes.socialLink}
        href="https://github.com/KarolinaCetera"
      >
        <GitHubIcon fontSize="large" />
      </Link>
      <div className={classes.cv}>
        <DownloadIcon fontSize="large" />
        <span>CV</span>
      </div>
    </div>
  );
};

export default Social;
