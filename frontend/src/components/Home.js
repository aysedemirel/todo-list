import React, { useState, useEffect } from 'react';

import FilterIcon from '../images/funnel.png';

import Summary from "./Summary/Summary";
import FormYeni from './Form/FormYeni';
import { GroupHeader, HomeWrapper, HomeContent, FilterButon } from './Home.styles';
import ItemTable from "./Table/Table";
import { Button, Collapse, Space } from 'antd';

const data = [
    {
        key: '1',
        name: 'Mission 1 Mission 1 Mission 1 Mission 1 Mission 1 Mission 1Mission 1Mission 1',
        priority: 1,
        date: '20-01-2022'
    },
    {
        key: '2',
        name: 'Mission 2',
        priority: 2,
        date: '23-01-2022'
    },
    {
        key: '3',
        name: 'Mission 3',
        priority: 3,
        date: '23-02-2022'
    },
    {
        key: '4',
        name: 'Mission 4',
        priority: 4,
        date: '20-08-2022'
    },
    {
        key: '5',
        name: 'Mission 5',
        priority: 5,
        date: '20-08-2022'
    },
];
const { Panel } = Collapse;

class Home extends React.Component {
    render() {
        return (<HomeWrapper>
            <HomeContent>
                <GroupHeader>{this.props.title}</GroupHeader>
                <FilterButon type="image" src={FilterIcon} />
            </HomeContent>
            <Summary planned={this.props.planned} done={this.props.done} />
            <FormYeni />
            <ItemTable title="Planned Items" data={data} />
            <Collapse collapsible="header" defaultActiveKey={['1']}>
                <Panel header="Done items" key="1">
                    <ItemTable data={data} />
                </Panel>
            </Collapse>
            <br/><br/><br/><br/><br/><br/>
        </HomeWrapper>);
    }
}

export default Home;