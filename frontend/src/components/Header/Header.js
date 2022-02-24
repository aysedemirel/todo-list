import React from 'react';

import TodoLogo from '../../images/todo-icon.png';
import FavLogo from '../../images/favicon.png';

import { HeaderWrapper, HeaderContent, LogoImg, FavLogoImg, TodoHeader, LogoWrapper, LogoLink } from './Header.styles';

const Header = () => (
    <HeaderWrapper>
        <HeaderContent>
            <LogoWrapper>
                <LogoLink href='/'>
                    <LogoImg src={TodoLogo} alt='todo-logo' />
                    <TodoHeader>To-Do App</TodoHeader>
                </LogoLink>
            </LogoWrapper>
            <FavLogoImg src={FavLogo} alt='fav-logo' />
        </HeaderContent>
    </HeaderWrapper>
);

export default Header;