import { useState } from "react";
import Link from "next/link";
import { IconButton, useMediaQuery } from "@mui/material";
import { Info, Menu } from "@mui/icons-material";
import Logo from "@component/components/layout/logo";
import NavDrawer from "@component/components/layout/nav-drawer";
import NavList from "@component/components/layout/nav-list";
import classes from "./navigation.module.scss";

const Navigation = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.controls}>
        <Link href="/" onClick={() => setIsNavOpen(false)}>
          <Logo />
        </Link>
        {!matches && (
          <IconButton onClick={handleOpenNav}>
            <Menu className={classes.icon} />
          </IconButton>
        )}
      </div>
      {matches && <NavList setIsNavOpen={setIsNavOpen} />}
      {!matches && isNavOpen && <NavDrawer setIsNavOpen={setIsNavOpen} />}
    </header>
  );
};

export default Navigation;
