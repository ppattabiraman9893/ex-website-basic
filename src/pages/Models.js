import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

export default function Models() {
  const modelsData = [
    {
      title: "Create Model",
      path: "/",
      icon: <IoIcons.IoMdCreate />,
      cName: "nav-text"
    },
    {
      title: "Model Libraries",
      path: "/",
      icon: <AiIcons.AiOutlineBarChart />,
      cName: "nav-text"
    }
  ];
  return (
    <div className="models">
      <div className="container-models">
        {modelsData.map((item, index) => {
          return (
            <li key={index} className={`container-li-item ${item.cName}`}>
              <div className="{container}">
                <Link className="{container-link-item}" to={item.path}>
                  {item.icon}
                  <span className="{container.link-name}">{item.title}</span>
                </Link>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
