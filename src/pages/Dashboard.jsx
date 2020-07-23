import React from 'react';
import ContributionGraph from '../components/dashboard/ContributionGraph';
import StatCardSmall from '../components/dashboard/StatCardSmall';
import ProfilePic from '../img/ProfilePic.jpg';

class Dashboard extends React.Component{
    render() {
        return <div className='full-width'>
            <div className='dashboard-tiles'>
                <div className='profile-section'>
                    <img className='profile-pic' src={ProfilePic} alt=''/>
                    <h1>Hi Mei!</h1>
                </div>
                <div className='today-streak'><p className='dashboard-heading'>13 Days</p> Current Streak</div>
                <div className='today-contribution'><p className='dashboard-heading'>10 Tasks</p>Daily Count</div>
                <div className='small-stats-group'>
                    <StatCardSmall title='Current Streak' data='20 Days'/>
                    <StatCardSmall title='Record Streak' data='48 Days'/>
                    <StatCardSmall title='Total Focus' data='3 Days 10 Hrs 30 Mins'/>
                </div>
            </div>
            <ContributionGraph/>
        </div>
    }
}
export default Dashboard;