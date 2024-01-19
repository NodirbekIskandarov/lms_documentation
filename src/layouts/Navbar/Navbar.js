import React from "react";
import {
  NavbarChildComponent,
  NavbarComponent,
  NavbarMenuComponent,
} from "./styles";
import logo from "../../assets/images/tift logo.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarComponent>
      <NavbarChildComponent>
        <Link to="/" className="link">
          <img src={logo} alt="tift_logo" />
        </Link>
        <NavbarMenuComponent>
          <div className="hover_part">
            <p>Tizim haqida<svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z" fill="#000"></path></svg></p>
            <div className="show_part">
              <Link className="link" to="/">Jamoa</Link>
              <br/>
              <Link className="link" to="/">Oliy ta'lim muassasalari</Link>
            </div>
          </div>
        </NavbarMenuComponent>
      </NavbarChildComponent>
    </NavbarComponent>
  );
}

export default Navbar;
