import React, { useState, useEffect } from 'react';

import FilterIcon from '../images/filter.png';

import Summary from "./Summary/Summary";
import { GroupHeader, HomeWrapper, HomeContent, FilterButon } from './Home.styles';

class Home extends React.Component {
    render() {
        return (<HomeWrapper>
            <HomeContent>
                <GroupHeader>{this.props.title}</GroupHeader>
                <FilterButon type="image" src={FilterIcon} />
            </HomeContent>
            <Summary planned={this.props.planned} done={this.props.done}/>
        </HomeWrapper>);
    }
}

export default Home;