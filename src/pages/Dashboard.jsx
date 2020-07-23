import React from 'react';
import ContributionGraph from '../components/dashboard/ContributionGraph';
import StatCardSmall from '../components/dashboard/StatCardSmall';
import ProfilePic from '../img/ProfilePic.jpg';

class Dashboard extends React.Component{
    render() {
        return <div className='full-width'>
            <div className='dashboard-tiles'>
                <div className='profile-section'>
                    <div className='profile-card'>
                        <div className='profile-pic' style={{backgroundImage: `url(${ProfilePic})`}}></div>
                        <h1>Hi Mei!</h1>
                    </div>
                    <h3>Today's Stats</h3>
                    <div className='small-stats-group'>
                    <StatCardSmall title='Contributions' data='+10'/>
                    <StatCardSmall title='Record Streak' data='48 Days'/>
                    <StatCardSmall title='Total Focus' data='10 Hrs 30 Mins'/>
                </div>
                </div>
                <div className='today-section'>
                    <div className='today-card'><p className='dashboard-heading'>13 Days</p> Current Streak</div>
                    <div className='today-card'><p className='dashboard-heading'>10 Tasks</p>Left Today</div>
                </div>

                <div className='graph-section'>
                    <h3 class='contribution-count'>293 contributions this year</h3>
                    <ContributionGraph/>
                </div>
            </div>
            
            
        </div>
    }
}
export default Dashboard;