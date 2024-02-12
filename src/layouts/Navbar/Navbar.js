import React, { useState } from "react";
import {
  Button,
  MenuSection,
  NavbarChildComponent,
  NavbarComponent,
  NavbarMenuComponent,
} from "./styles";

import logo from "../../assets/images/tift logo.jpeg";
import { Link } from "react-router-dom";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarComponent>
      <NavbarChildComponent>
        <Link to="/">
          <img src={logo} alt="tift_logo" />
        </Link>
        <div className="menus">
          <NavbarMenuComponent>
            <div className="hover_part">
              <p>
                Tizim haqida
                <svg
                  width="25"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                    fill="#000"
                  ></path>
                </svg>
                <div className="show_part">
                  <div className="link_item">
                    <Link className="link" to="/team">
                      Jamoa
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/universities">
                      Oliy ta'lim muassasalari
                    </Link>
                  </div>
                </div>
              </p>
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
                  className=""
                >
                  <path
                    d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                    fill="#000"
                  ></path>
                </svg>
                <div className="show_part">
                  <div className="link_item">
                    <Link className="link" to="/">
                      Talabalarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      O'qituvchilarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Adminstratorlarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Dekanlarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Kadrlarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Kafedra mudiriga
                    </Link>
                  </div>
                </div>
              </p>
            </div>
          </NavbarMenuComponent>
          <Link className="link" to="/faqs">
            FAQS
          </Link>
        </div>
        <div className="button_part">
          <Button>Konsultatsiya</Button>
          <button className="menu_bars" onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
        <MenuSection isOpen={isOpen}>
          <div className="header_part_menu">
            {/* <Link className="link_in" to="/"><img src={logo} alt="tift_logo" /></Link> */}
            <button  onClick={toggleMenu}>x</button>
          </div>
          <NavbarMenuComponent>
            <div className="hover_part">
              <p>
                Tizim haqida
                <svg
                  width="25"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                    fill="#000"
                  ></path>
                </svg>
                <div className="show_part">
                  <div className="link_item">
                    <Link className="link" to="/team">
                      Jamoa
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/universities">
                      Oliy ta'lim muassasalari
                    </Link>
                  </div>
                </div>
              </p>
            </div>
          </NavbarMenuComponent>
          <Link className="link" to="/">
            Tizim imkoniyatlari
          </Link>
          <br/>
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
                  className=""
                >
                  <path
                    d="M9.119 9l3.88 3.88L16.879 9a.996.996 0 111.41 1.41L13.699 15a.996.996 0 01-1.41 0l-4.59-4.59a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
                    fill="#000"
                  ></path>
                </svg>
                <div className="show_part">
                  <div className="link_item">
                    <Link className="link" to="/">
                      Talabalarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      O'qituvchilarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Adminstratorlarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Dekanlarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Kadrlarga
                    </Link>
                  </div>
                  <div className="link_item">
                    <Link className="link" to="/">
                      Kafedra mudiriga
                    </Link>
                  </div>
                </div>
              </p>
            </div>
          </NavbarMenuComponent>
          <Link className="link" to="/">
            FAQS
          </Link>
        </MenuSection>
      </NavbarChildComponent>
    </NavbarComponent>
  );
}

export default Navbar;
