import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 150px;

    @media screen and (max-width: 500px)
    {
        width: 75px;
    }
`;

export const FavLogoImg = styled.img`
    width: 75px;

    @media screen and (max-width: 500px)
    {
        width: 25px;
    }
`;

export const TodoHeader = styled.h1`
    font-family: 'Shizuru', cursive;
    color: white;
    text-decoration: none;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 0 20px;
`;
export const LogoLink=styled.a`
    text-decoration:none;
    display: flex;
    align-items: center;
`;