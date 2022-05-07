import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems, catalogMenu } from "./data";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  Nav,
  SubMenuWrapper,
  NavSubMenu,
  NavItem,
  Link,
  NavSubItem,
} from "./NavigationStyles";

const Navigation = ({ show }) => {
  const [toggle, showToggle] = useState(false);

  const showSubMenu = (id) => {
    if (id === 1) {
      showToggle(!toggle);
    }
  };

  return (
    <Nav show={show}>
      {navItems.map((item) => {
        return (
          <NavItem key={item.id}>
            <Link>
              <NavLink onClick={() => showSubMenu(item.id)} to={item.link}>
                {item.name} {item.toggle ? <MdKeyboardArrowDown /> : null}
              </NavLink>
            </Link>
            {item.toggle ? (
              <SubMenuWrapper toggle={toggle}>
                <NavSubMenu>
                  {catalogMenu.map((item) => (
                    <NavSubItem key={item.id}>
                      <NavLink to={item.link}>{item.name}</NavLink>
                    </NavSubItem>
                  ))}
                </NavSubMenu>
              </SubMenuWrapper>
            ) : null}
          </NavItem>
        );
      })}
    </Nav>
  );
};

export default Navigation;
