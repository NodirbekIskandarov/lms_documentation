import styled from "styled-components";

export const HowUsingSection = styled.section`
    padding:120px 0 ;
    .how__using-title{
        width: 90%;
        margin: 0 auto;
        p{
            margin: 24px 0 96px;
        }
    }
    @media(max-width: 768px){
        padding: 56px 0;
    }
`

export const HowUsingHead3 = styled.h3`
    font-size: 56px;
    /* line-height: 72px; */
    text-align: center;
    @media(max-width:768px){
        font-size: 24px;
        br{
            display: none;
        }
    }
    @media(max-width:400px){
        br{
            display: block;
        }
    }
`
export const HowUsingContainers = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    height: 100%;

    .how__using-hover{
        .hover__img:hover{
                transform: scale(1.1);
                transition: 0.3s;
            }
        
    }

    .how__using-containers{
        box-shadow: 0 1px 10px  #0000005F;
        padding: 40px;
        border-radius: 8px;
        margin: 12px 0;
        .img__paragrifs-containers{
            width: 45%;
            @media(max-width: 768px) {
                width: 90%;
            }
        }
    }

    .how__using-flex{
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    .how__using-img{
        display: flex;
        justify-content: center;
        align-items: center;
        @media(max-width: 768px){
            padding-top: 30px;
    }
    }

    @media(max-width: 768px){
        display: block;
    }
`

export const HowUsingEducation = styled.div`
    width: 70%;
    .education__img{
        padding-top: 30px;
    }
    @media(max-width: 768px){
        width: 100%;
    }
`

export const HowUsingWrap = styled.div`
    .how__using-wrap{
        display: flex;  
        flex-wrap: wrap;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
`

export const HowUsingFlex = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    @media(max-width: 768px){
        display: block;
    }
`

export const HowUsingHead4 = styled.h4`
    font-size: 32px;
    margin-bottom: 16px;
    @media(max-width: 992px){
        font-size: 24px;
    }
`

export const HowUsingHead5 = styled.h5`
    font-size: 24px;
    margin-bottom: 16px;
`

export const HowUsingParagrifs = styled.p`
    font-size: 18px;
    color: rgb(55, 55, 55);
    line-height: 32px;
`

export const HowUsingImg = styled.img`
    width: 267px;
    height: 267px;
    &:hover{
        transform: scale(1.1);
        transition: 0.3s;
    }

    @media(max-width: 1400px){
        width: 222px;
        height: 222px;
    }
    @media(max-width: 1200px) {
        width: 176px;
        height: 176px;
    }
    @media(max-width: 992px){
        width: 115px;
        height: 115px;
    }
    @media(max-width: 768px){
        width: 100%;
        height: 100%;
    }
`