import styled from "styled-components";

export const FooterComponent = styled.div`
    width: 100%;
    background-color: black;
`
export const FooterChildComponent = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const FooterChildComponentCard = styled.div`
    width: 25%;
    @media (max-width: 768px) {
        width: 50%;
    }
`
export const FooterCardTitle = styled.h2`
    color: white;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`
export const FooterMenuItem = styled.p`
    margin: 15px 0;
    .link {
        color: white;
        opacity: 0.5;
        text-decoration: none;
        font-size: 16px;
    }
    @media (max-width: 768px) {
        .link {
            font-size: 12px;
        }
    }
`
export const FooterLineComponent = styled.div`
    width: 90%;
    border-top: 2px solid white;
    margin: 0 auto;
`
export const FooterSocialsComponent = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
export const FooterSocialsList = styled.div`
    width: 20%;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .link {
        color: white;
        text-decoration: none;
        font-size: 25px;
    }
    @media (max-width: 768px) {
        width: 30%;
        .link {
            font-size: 20px;
        }
    }
`
export const FooterSocialsText = styled.div`
    width: 40%;
    @media (max-width: 768px) {
        width: 50%;
    }
`
export const FooterSocialsTextP = styled.p`
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`