import React from 'react';

class ContributionGraph extends React.Component {

    hardCodeSquares() {
        const items = []
        for(var i = 0; i < 357; i++) {
            const level = Math.floor(Math.random() * 3);
            items.push(<li data-level={level}></li>);
        }
        return items;
    }

    render() {
        return <div class='contribution-graph'>
            <ul class='months'>
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
            <ul class='days'>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul class='squares'>
                {this.hardCodeSquares()}
            </ul>
        </div>
    }
}
export default ContributionGraph;