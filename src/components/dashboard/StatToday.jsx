import React from 'react';

class StatToday extends React.Component {
    render() {
        return <div className='today-stat'>
            <h3>Today</h3>
            <p>+{this.props.currentStreak} Days</p>
            <p>+{this.props.points} Points</p>
            <p>+{this.props.focusTime} Mins</p>
        </div>
    }
}
export default StatToday;
