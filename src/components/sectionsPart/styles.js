import styled from "styled-components";
export const SectionsPartMain = styled.div`
    width: 100%;
    padding-bottom: 50px;
`
export const SectionsPartChild = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const SectionsOutletListPart = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const SectionsOutletList = styled.div`
    width: 20%;
    height: 45vh;
    border: 1px solid gray;
    border-radius: 15px;
    box-shadow: 10px 10px 10px gray;
    padding: 20px 15px;
    .active {
        color: #834bf3;
    }
    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }
    p {
        cursor: pointer;
        padding: 10px 0;
        font-size: 20px;
        width: 100%;
    }
    @media (max-width: 760px) {
        width: 80%;
        margin: 0 auto;
    }
`
export const SectionsOutletItem = styled.div`
    width: 70%;
    h1 {
        margin-bottom: 20px;
    }
    .main-question {
        width: 100%;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        background-color: white;
        padding: 20px 5px;
    }
    .question {
        cursor: pointer;
    }
    .answer {
        display: none;
    }
    .answer-active {
        display: block;
        margin-top: 15px;
    }
    p {
        font-size: 18px;
        opacity: 0.8;
    }
    @media (max-width: 760px) {
        width: 80%;
        margin: 0 auto;
        padding-top: 80px;
    }
`