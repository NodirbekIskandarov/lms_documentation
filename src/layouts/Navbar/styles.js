import styled from "styled-components";

export const NavbarComponent = styled.div`
  width: 100%;
`;

export const NavbarChildComponent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menus {
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .link {
    text-decoration: none;
    color: black;
    &:hover {
      border-bottom: 2px solid blue;
    }
    img {
      width: 100%;
    }
  }
  .button_part {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu_bars {
      display: none;
    }
  }
  .menu_when_media {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: red;
    .header_part_menu {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid red;
    }
  }
  @media (max-width: 990px) {
    .button_part {
      width: 30%;
      .menu_bars {
        display: block;
        border: none;
        background-color: white;
      }
    }
    .menus {
      display: none;
    }
  }
`;

export const NavbarMenuComponent = styled.div`
  .hover_part {
    width: 100%;
    position: relative;
    p {
      display: flex;
      align-items: center;
      &:hover .show_part {
        display: block;
      }
      .show_part {
        width: 200px;
        display: none;
        position: absolute;
        right: 0;
        left: 0;
        top: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: white;
        box-shadow: 0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05);
        .link_item {
          width: 100%;
          padding: 5px 10px;
          &:hover {
            background-color: lightgray;
          }
        }
      }
    }
  }
`
export const Button = styled.button`
  width: 100%;
  color: white;
  background: linear-gradient(90deg,#344bc1,#834bf3);
  background-size: 200% 200%;
  animation: gradient 2s ease infinite; 
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0;
  &:hover{
    box-shadow:0 0 26px 0 #3B4CC6B2;
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 990px) {
    width: 70%;
  }
`
export const MenuSection = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 100%;
  background-color: white;
  padding: 20px;
  transition: right 0.3s ease;
`;