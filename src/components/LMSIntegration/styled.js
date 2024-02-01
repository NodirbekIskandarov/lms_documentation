import styled from "styled-components";

export const Integration = styled.section`
    width: 90%;
    margin: 0 auto;
    padding: 0 0 120px;

    .integration__flex{
        display: flex;
        justify-content: center;

        @media (max-width: 1024px) {
            display: grid;
            grid-template-columns: auto auto;
        }

        @media (max-width: 586px) {
            display: grid;
            grid-template-columns: auto;
            /* width: 100%; */
        }
    }
`

export const IntegrationCardsDiv = styled.div`
    padding:16px 12px;
    height: 151px;
    width: 285px;
    @media (max-width: 350px) {
        width: 100%;
    }
    .card__imgs{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 119px;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 3px 8px 0 #0000001F,0 0 0 0.5px #00000008;
        img{
            width: 100%;
            height: 90%;
        }
    } 
`