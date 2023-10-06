import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handleLogin = () => {
    console.log("cehck env", process.env);
    //http://localhost:8080/login?serviceURL=http://localhost:3000
    window.location.href = `${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`;
  };
  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
          React{" "}
        </NavLink>{" "}
      </NavItem>{" "}
      <NavItem>
        <NavLink href="#"> Manage User </NavLink>{" "}
      </NavItem>{" "}
      <NavItem>
        <NavLink href=""> About </NavLink>{" "}
      </NavItem>{" "}
      <NavItem>
        <NavLink onClick={handleLogin}> Login </NavLink>{" "}
      </NavItem>{" "}
      <NavItem>
        <NavLink disabled href="#">
          Welcome to...{" "}
        </NavLink>{" "}
      </NavItem>{" "}
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          User{" "}
        </DropdownToggle>{" "}
        <DropdownMenu>
          <DropdownItem header> Header </DropdownItem>{" "}
          <DropdownItem disabled> Action </DropdownItem>{" "}
          <DropdownItem> Another Action </DropdownItem> <DropdownItem divider />
          <DropdownItem> Logout </DropdownItem>{" "}
        </DropdownMenu>{" "}
      </Dropdown>{" "}
    </Nav>
  );
}

export default Example;
