import React from 'react';
import ContributionGraph from '../components/dashboard/ContributionGraph';
import StatCardSmall from '../components/dashboard/StatCardSmall';
import StatToday from '../components/dashboard/StatToday';
import ProfilePic from '../img/ProfilePic.jpg';

class Dashboard extends React.Component{
    render() {
        return <div className='full-width'>
            <div className='dashboard-tiles'>
                <div className='profile-section'>
                    <img className='profile-pic' src={ProfilePic} alt=''/>
                    <h1>Hi Mei!</h1>
                </div>
                <StatToday className='today-stats-group' points='10' focusTime='49'/>
                <div className='small-stats-group'>
                    <StatCardSmall title='Current Streak' data='20 Days'/>
                    <StatCardSmall title='Record Streak' data='48 Days'/>
                    <StatCardSmall title='Total Focus' data='3 Days 10 Hrs 30 Mins'/>
                </div>
            </div>
            <h3 class='contribution-count'>293 Contributions</h3>
            <ContributionGraph/>
        </div>
    }
}
export default Dashboard;