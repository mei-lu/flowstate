import React from 'react';

class ContributionGraph extends React.Component {

    hardCodeSquares() {
        const items = []
        for(var i = 0; i < 365; i++) {
            const level = Math.floor(Math.random() * 4);
            items.push(<li data-level={level} key={i}></li>);
        }
        return items;
    }

    render() {
        return <div className='contribution-graph'>
            <ul className='months'>
                <li>Jan</li>
                <li>Feb</li>
                <li>Mar</li>
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
                <li>Jul</li>
                <li>Aug</li>
                <li>Sep</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
            </ul>
            <ul className='days'>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul className='squares'>
                {this.hardCodeSquares()}
            </ul>
        </div>
    }
}
export default ContributionGraph;