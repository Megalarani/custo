import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../Assests/dashboard.svg";
import { ReactComponent as StyleIcon } from "../../Assests/style.svg";
import { ReactComponent as SectionIcon } from "../../Assests/sections.svg";
import { ReactComponent as LayoutIcon } from "../../Assests/layout.svg";
import { ReactComponent as EditIcon } from "../../Assests/edit.svg";
import { ReactComponent as SettingsIcon } from "../../Assests/settings.svg";

const Sidebar = () => {
  const navMenuList = [
    {
      name: "Dashboard",
      path: "dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Style Guide",
      path: "styleguide",
      icon: StyleIcon,
    },
    {
      name: "Sections",
      path: "sections",
      icon: SectionIcon,
    },
    {
      name: "Layout",
      path: "layout",
      icon: LayoutIcon,
    },
    {
      name: "Edit",
      path: "edit",
      icon: EditIcon,
    },
    {
      name: "Settings",
      path: "settings",
      icon: SettingsIcon,
    },
  ];
  return (
    <>
      <div
        className="col-md-3 col-lg-2 left_col p-0 position-fixed"
        style={{ top: 0, left: 0 }}
      >
        <div className="scroll-view">
          <div className="nav_title">
            <h5 className="text-center m-0 px-1 py-2">
              <span>Divi Day Care</span>
            </h5>
          </div>
          <ul className="nav side-menu pt-2">
            {navMenuList.map((menuItem) => {
              return (
                <li className="list-item d-block w-100" key={menuItem.name}>
                  <NavLink to={menuItem.path}>
                    {menuItem.icon && <menuItem.icon />}
                    {menuItem.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;