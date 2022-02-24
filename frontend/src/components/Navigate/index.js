import React from 'react';
import 'antd/dist/antd.css';

import { Menu } from 'antd';

import TodayIcon from '../../images/only-today.png';
import TomorrowIcon from '../../images/tomorrow.png';
import WeekIcon from '../../images/week.png';
import MonthIcon from '../../images/month.png';
import YearIcon from '../../images/year.png';
import IdeaIcon from '../../images/idea.png';
import ListIcon from '../../images/list.png';
import DoneIcon from '../../images/done.png';

import { NavigateIcon } from './Navigate.styles';

const Navigate = () => (
  <Menu
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
  >
    <Menu.Item key="1" icon={<NavigateIcon src={TodayIcon} alt="today" />}>
      <a href="./Item">Today</a>
    </Menu.Item>
    <Menu.Item key="2" icon={<NavigateIcon src={TomorrowIcon} alt="tomorrow" />}>
      Tomorrow
    </Menu.Item>
    <Menu.Item key="3" icon={<NavigateIcon src={WeekIcon} alt="week" />}>
      This Week
    </Menu.Item>
    <Menu.Item key="4" icon={<NavigateIcon src={MonthIcon} alt="month" />}>
      This Month
    </Menu.Item>
    <Menu.Item key="5" icon={<NavigateIcon src={YearIcon} alt="year" />}>
      This Year
    </Menu.Item>
    <Menu.Item key="6" icon={<NavigateIcon src={IdeaIcon} alt="unplanned" />}>
      Unplanned
    </Menu.Item>
    <Menu.Item key="7" icon={<NavigateIcon src={ListIcon} alt="all items" />}>
      All Items
    </Menu.Item>
    <Menu.Item key="8" icon={<NavigateIcon src={DoneIcon} alt="done items" />}>
      Done
    </Menu.Item>
  </Menu>
);

export default Navigate;