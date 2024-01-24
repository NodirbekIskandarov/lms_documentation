import styled from "styled-components";

export const ManagementComponent = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 120px;

  .management__component-h1{
    text-align: center;
    font-size: 64px;

    @media (max-width: 1200px) {
      font-size: 32px;
    }

    span{
    color: #344bc1;
    
    }
  }

  .management__component-paragrif{
    text-align: center;
    margin: 24px 0 32px;
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ManagementButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 24px;
@media(max-width:768px){
  gap: 16px;
}
button{
  width: 20%;
  @media(max-width: 768px){
    font-size: 14px;
    width:30% ;
  }
}

`

export const ManagementButtonVideo = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  color: black;
  gap: 20px;
  background-color: transparent;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  padding: 15.6px 0;
  &:hover{
    background-color: black;
    color: white;
    transition: 0.3s;
    cursor: pointer;
  }
  @media(max-width: 768px){
    padding: 12.8px 0;
    gap: 12px;
  }

  div{
    display: flex;
    align-items: center;
  }
`