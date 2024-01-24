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
  .link {
    // width: 15%;
    text-decoration: none;
    color: black;
    &:hover {
      border-bottom: 2px solid blue;
    }
    img {
      width: 100%;
    }
  }
`;

export const NavbarMenuComponent = styled.div`
  // width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .show_part {
    // width: 100%;
    background-color: white;
    display: none;
    position: absolute;   
    padding: 10px 0;
    /* padding-right */
    box-shadow: 10px 10px 10px 10px gray;
    z-index: 6;
    border: 1px solid white;
    .link {
        padding: 10px;
        width: 100%;
        text-decoration: none;
        color: black;
        margin-top: 100px;
        &:hover {
          background-color: lightgray;
        }
    }
  }
  .hover_part:hover .show_part {
    display: block;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .hover_part {
    // width: 30%;
    position: relative;
    p {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
      }
  }
`
export const Button = styled.button`
  width: 15%;
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
`