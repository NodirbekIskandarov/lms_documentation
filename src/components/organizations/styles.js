import styled from "styled-components";

export const OrganizationsSection = styled.section`
    /* width: 100%; */
    padding: 120px 0;

`

export const OrganizationsHeading = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-bottom: 112px;
    .organizations__heading-2{
        min-width: auto;
        width: 700px;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        max-width: 100%;
        @media(max-width:768px){
            font-size: 16px;
            br{
                display: none;
            }
        }
    }
` 

export const OrganizationsFlags = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        &:hover{
            width: 110px;
            height: 110px;
            transition: 0.3s;
        }
    }
`