import classes from "@component/components/layout/navigation.module.scss";
import NavList from "@component/components/layout/nav-list";

const NavDrawer = () => (
  <div className={classes.drawer}>
    <NavList />
  </div>
);

export default NavDrawer;
