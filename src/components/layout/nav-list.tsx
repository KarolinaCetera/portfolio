import { useRouter } from "next/router";
import Link from "next/link";
import { navLinks } from "@component/consts";
import classes from "./nav-list.module.scss";
import { FC } from "react";
import { useTranslation } from "next-i18next";

interface NavListProps {
  setIsNavOpen?: (value: boolean) => void;
}

const NavList: FC<NavListProps> = ({ setIsNavOpen }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <nav className={classes.navList}>
      <ul>
        {navLinks.map(({ name, path }) => (
          <li key={path}>
            <Link
              onClick={() => setIsNavOpen && setIsNavOpen(false)}
              href={path}
              className={router.pathname == path ? classes.active : ""}
            >
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
