import React from 'react';
import { Link } from 'react-router-dom';

import TodoLogo from '../../images/todo-icon.png';
import FavLogo from '../../images/favicon.png';

import { Wrapper, Content, LogoImg, FavLogoImg, TodoHeader, LogoWrapper, LogoLink } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoWrapper>
                <LogoLink href='/'>
                    <LogoImg src={TodoLogo} alt='todo-logo' />
                    <TodoHeader>To-Do App</TodoHeader>
                </LogoLink>
            </LogoWrapper>
            <FavLogoImg src={FavLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;