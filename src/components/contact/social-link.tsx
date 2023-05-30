import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "@component/components/contact/social.module.scss";

interface SocialLinkProps {
  href: string;
  image: any;
  title: string;
}

const SocialLink: FC<SocialLinkProps> = ({ href, image, title }) => (
  <Link className={classes.socialLink} href={href}>
    <Image src={image} alt={title} width={30} height={30} />
    <span>{title}</span>
  </Link>
);
export default SocialLink;
