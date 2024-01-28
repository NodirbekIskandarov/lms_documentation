import styled from "styled-components";

export const ManagementSection = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 120px 0 120px;

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
    margin: 24px 0 56px;
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media(max-width: 768px){
    padding: 56px 0;
  }
`;

export const TitleComponent = styled.p`
    max-width: auto;
    width: 832px;
    max-width: 100%;
    text-align: center;
    margin: 24px 0 56px;
    font-size: 24px;
    line-height: 2rem;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.25rem;
      br{
        display: none;
      }
    }
`

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
  padding: 18px 0;
  &:hover{
    background-color: black;
    color: white;
    transition: 0.3s;
    cursor: pointer;
  }
  @media(max-width: 768px){
    padding: 14.8px 0;
    gap: 12px;
  }

  div{
    display: flex;
    align-items: center;
  }
`

export const ManagementImg = styled.div`
  width: 100%;
  margin-top: 120px;
  img{
    width: 100%;
    height: 100%;
    box-shadow: 0 13px 43px 0 #0000005F;
    border-radius: 8px;
  }
`