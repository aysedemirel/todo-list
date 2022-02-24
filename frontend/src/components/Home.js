import React, { useState, useEffect } from 'react';

import FilterIcon from '../images/filter.png';

import Summary from "./Summary";
import { GroupHeader, HomeWrapper, HomeContent, FilterButon } from './Home.styles';

const Home = () => (
    <HomeWrapper>
        <HomeContent>
            <GroupHeader>Baslik</GroupHeader>
            <FilterButon type="image" src={FilterIcon}/>
        </HomeContent>
        <Summary />
    </HomeWrapper>
);

export default Home;