import { FC } from "react";
import classes from "@component/components/layout/navigation.module.scss";
import NavList from "@component/components/layout/nav-list";

interface NavDrawerProps {
  setIsNavOpen: (value: boolean) => void;
}

const NavDrawer: FC<NavDrawerProps> = ({ setIsNavOpen }) => (
  <div className={classes.drawer}>
    <NavList setIsNavOpen={setIsNavOpen} />
  </div>
);

export default NavDrawer;
