import styled from "styled-components";

export const ListWrapper=styled.div`
    display: inline-flex;
    align-items: center;
    padding: 0 20px;
    margin: 0 auto;
`;

export const Icon =styled.img`
    width: 25px;
    margin-right: 10px;

    @media screen and (max-width: 500px)
    {
        width: 10px;
    }
`; 

export const ItemLink = styled.a`
    text-decoration:none;

    :visited{
        color:inherit;
    }
`;

export const ItemText = styled.p`
    color:var(--black);
    text-align: center;
    margin: 0;
    font-size: 1rem;
    color: black;
    position: absolute;
    left: 150px;
`;