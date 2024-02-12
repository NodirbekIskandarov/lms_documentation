import styled from "styled-components";

export const FaqsMainComponent = styled.div`
    width: 100%;
`
export const FaqsChildComponent = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const FaqsBoxComponent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
`
export const FaqsTextPart = styled.div`
    width: 45%;
    @media (max-width: 767px) {
        width: 100%;
    }
`
export const FaqsTextH1 = styled.h1`
    width: 90%;
    font-size: 60px;
    line-height: 70px;
`
export const FaqsTextP = styled.p`
    width: 100%;
    font-size: 30px;
    opacity: 0.5;
    margin-top: 40px;
`
export const FaqsImageComponent = styled.div`
    width: 45%;
    @media (max-width: 767px) {
        width: 100%;
        margin-top: 50px;
    }
`
export const FaqsImage = styled.img`
    width: 100%;
`