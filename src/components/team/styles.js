import styled from "styled-components";

export const TeamMainComponent = styled.div`
    width: 100%;
`
export const TeamChildComponent = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const TeamChildListBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
`
export const TeamListItem = styled.div`
    width: 23%;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 15px;
    margin-top: 40px;
    box-shadow: 10px 10px 10px gray;
    @media (max-width: 990px) {
        width: 46%;
    }
`
export const TeamMemberImage = styled.img`
    width: 100%;
    border-radius: 10px;
`
export const TeamMemberName = styled.h2`
    width: 100%;
    text-align: center;
    margin: 10px 0;
    @media (max-width: 990px) {
        font-size: 20px;
    }
`
export const TeamMemberPosition = styled.p`
    width: 100%;
    color: black;
    text-align: center;
    margin: 10px 0;
`