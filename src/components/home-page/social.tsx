import DownloadIcon from "@mui/icons-material/Download";
import classes from "./social.module.scss";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Info } from "@mui/icons-material";
import { useState } from "react";

const Social = () => {
  const [showInfo, setShowInfo] = useState(false);

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
      <a download href="/cv.pdf" className={classes.cv}>
        <DownloadIcon fontSize="large" />
        <span>CV</span>
      </a>
      <div className={classes.cv} onClick={() => setShowInfo(!showInfo)}>
        <Info fontSize="large" />
      </div>
      {showInfo && (
        <div className={classes.info}>
          Icon by{" "}
          <a href="https://freeicons.io/profile/433683">manshagraphics</a> on{" "}
          <a href="https://freeicons.io">freeicons.io</a>
        </div>
      )}
    </div>
  );
};

export default Social;
