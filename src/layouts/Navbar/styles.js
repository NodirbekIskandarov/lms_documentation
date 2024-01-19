import styled from "styled-components";

export const NavbarComponent = styled.div`
  width: 100%;
  background-color: red;
`;

export const NavbarChildComponent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .link {
    width: 15%;
    text-decoration: none;
    img {
      width: 100%;
    }
  }
`;

export const NavbarMenuComponent = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .show_part {
    display: none;
    position: absolute;   
    // top: 30px;
    z-index: 6;
    border: 1px solid white;
    .link {
        width: 100%;
        text-decoration: none;
        color: black;
        margin-top: 100px;
    }
  }
  .hover_part:hover .show_part {
    display: block;
  }
  .hover_part {
    width: 30%;
    position: relative;
    p {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
      }
  }
`;
