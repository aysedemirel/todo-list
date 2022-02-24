import React from 'react';

import ListItem from './ListItem/ListItem';

import TodayIcon from '../../images/only-today.png';
import TomorrowIcon from '../../images/tomorrow.png';
import WeekIcon from '../../images/week.png';
import MonthIcon from '../../images/month.png';
import YearIcon from '../../images/year.png';
import IdeaIcon from '../../images/idea.png';
import ListIcon from '../../images/list.png';
import DoneIcon from '../../images/done.png';

import {NavigateList, NavigateItem} from './Navigate.styles';



const Navigate = () => (
  <NavigateList>
    <NavigateItem><ListItem image={TodayIcon} title="Today" address="./Today" number="0"/></NavigateItem>
    <NavigateItem><ListItem image={TomorrowIcon} title="Tomorrow" address="./Tomorrow" number="0"/></NavigateItem>
    <NavigateItem><ListItem image={WeekIcon} title="This Week" address="./Week" number="0"/></NavigateItem>
    <NavigateItem><ListItem image={MonthIcon} title="This Month" address="./Month" number="0"/></NavigateItem>
    <NavigateItem><ListItem image={YearIcon} title="This Year" address="./Year" number="0"/></NavigateItem>
    <NavigateItem><ListItem image={IdeaIcon} title="Unplanned" address="./Unplanned" number="0"/></NavigateItem>
    <NavigateItem><ListItem image={ListIcon} title="All Items" address="./All" number="0"/></NavigateItem>
    <NavigateItem><ListItem image={DoneIcon} title="Done" address="./Done" number="0"/></NavigateItem>
  </NavigateList>

);

export default Navigate;