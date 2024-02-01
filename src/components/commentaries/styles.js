import styled from "styled-components";

export const CommentariesSection = styled.section`
    width: 90%;
    margin: 0 auto;
    padding: 120px 0 120px;

    .commentaries__relative{
    }

    @media(max-width: 768px){
    padding: 56px 0;
  }
`

export const CommentariesCard = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: 806px;
    position: relative;
    @media(max-width: 1200px) {
        .media__1200-none{
            display: none;
        }
    }
    @media (max-width: 768px) {
        display: block;
        height: 1424px;
    }
`

export const CommentariesDiv = styled.div`
    width: 100%;
`

export const CardsElements = styled.div`
        margin: 12px;
        border-radius: 5px;
        box-shadow: 0 3px 8px 0 #0000001F,0 0 0 0.5px #00000008;
    padding: 24px;
    .cards__element-paragriph{
        padding: 24px 0;
        font-size: 18px;
        line-height: 2rem;
    }

    .line__border{
        border: 1px solid #f1f5f9;
    }

`

export const CardBottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    .bottom__div-head5{
        padding-bottom: 4px;
        font-size: 16px;
    }
`

export const CommentariesGradient = styled.div`
    height: 214px;
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to bottom, transparent 0%, #ffffff 100%);
`