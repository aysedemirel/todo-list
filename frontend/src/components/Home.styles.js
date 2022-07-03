import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: block;
    align-items: center;
    max-width: var(--maxWidth);
    padding: 0 10px;
    margin: 0 auto;
    width: -webkit-fill-available; 
    background-color: aliceblue;
`;

export const GroupHeader = styled.h1`
    color:black;    
`; 

export const HomeContent = styled.div`
    display: flex;
    align-items: center;
    max-width: var(--maxWidth);
    padding: 0;
    margin: 0 auto;
    align-items: baseline;
`;

export const FilterButon = styled.input`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0px;
    margin: 10px;
    cursor: pointer;
`;