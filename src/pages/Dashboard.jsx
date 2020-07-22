import React from 'react';
import ContributionGraph from '../components/dashboard/ContributionGraph';
import StatCardSmall from '../components/dashboard/StatCardSmall';
import StatToday from '../components/dashboard/StatToday';

class Dashboard extends React.Component{
    render() {
        return <div>
            <div><h2>Hey Mei!</h2></div>
            <StatToday currentStreak='20' points='10' focusTime='49'/>
            <StatCardSmall title='Record Streak' data='48 Days'/>
            <StatCardSmall title='Total Focus' data='3 Days 10 Hrs 30 Mins'/>
            <h3 class='contribution-count'>293 Stars</h3>
            <ContributionGraph/>
        </div>
    }
}
export default Dashboard;