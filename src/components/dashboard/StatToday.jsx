import React from 'react';

class StatToday extends React.Component {
    render() {
        return <div className='today-stat'>
            <h3>Today's Progress</h3>
            <p>{this.props.points} Contributions</p>
            <p>{this.props.focusTime} Mins focused</p>
        </div>
    }
}
export default StatToday;
