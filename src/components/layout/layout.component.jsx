import { Header } from "../header/header.component";
import "./layout.styles.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const Layout = (props) => {
  const [isSidebarHidden, setSidebarHidden] = useState(true);

  const showSidebar = () => {
    setSidebarHidden(false);
  };
  const hideSidebar = () => {
    setSidebarHidden(true);
  };

  return (
    <div>
      <Header onShow={showSidebar}></Header>
      <Outlet context={[isSidebarHidden, hideSidebar]} />
    </div>
  );
};
