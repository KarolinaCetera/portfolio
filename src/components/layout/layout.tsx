import { FC, ReactNode } from "react";
import Navigation from "@component/components/layout/navigation";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
