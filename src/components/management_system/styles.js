import styled from "styled-components";

export const ManagementComponent = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 120px;

  .management__component-h1{
    text-align: center;
    font-size: 64px;

    @media (max-width: 1200px) {
      font-size: 48px;
    }

    span{
    color: #344bc1;
    
    }
  }
`;