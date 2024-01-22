import React from "react";
import {
  Button,
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
        <Link to="/">
          <img src={logo} alt="tift_logo" />
        </Link>
        <NavbarMenuComponent>
          <div className="hover_part">
            <p>
              Tizim haqida
              <svg
                width="25"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                  fill="#000"
                ></path>
              </svg>
            </p>
            <div className="show_part">
              <Link className="link" to="/team">
                Jamoa
              </Link>
              <br />
              <br />
              <Link className="link" to="/universities">
                Oliy ta'lim muassasalari
              </Link>
            </div>
          </div>
        </NavbarMenuComponent>
        <Link className="link" to="/">
          Tizim imkoniyatlari
        </Link>
        <Link className="link" to="/">
          Integratsiya
        </Link>
        <NavbarMenuComponent>
          <div className="hover_part">
            <p>
              Yo'riqnomalar
              <svg
                width="25"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                  fill="#000"
                ></path>
              </svg>
            </p>
            <div className="show_part">
              <Link className="link" to="/">
                Talabalarga
              </Link>
              <br />
              <br />
              <Link className="link" to="/">
                O'qituvchilarga
              </Link>
              <br />
              <br />
              <Link className="link" to="/">
                Adminstratorlarga
              </Link>
              <br />
              <br />
              <Link className="link" to="/">
                Dekanlarga
              </Link>
              <br />
              <br />
              <Link className="link" to="/">
                Kadrlarga
              </Link>
              <br />
              <br />
              <Link className="link" to="/">
                Kafedra mudiriga
              </Link>
            </div>
          </div>
        </NavbarMenuComponent>
        <Link className="link" to="/">
          FAQS
        </Link>
      <Button>Konsultatsiya</Button>
      </NavbarChildComponent>
    </NavbarComponent>
  );
}

export default Navbar;
