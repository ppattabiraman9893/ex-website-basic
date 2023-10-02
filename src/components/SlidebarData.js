import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Service Registry",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Workflow",
    path: "/products",
    icon: <IoIcons.IoIosAnalytics />,
    cName: "nav-text"
  },
  {
    title: "Insights",
    path: "/insights",
    icon: <FaIcons.FaChartBar />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    path: "/",
    icon: <IoIcons.IoIosSettings />,
    cName: "nav-text"
  }
];
