import React from 'react';

class StatCardSmall extends React.Component {
    render() {
        return <div class='statcard-small'>
            <p>{this.props.title}</p>
            <p>{this.props.data}</p>
        </div>
    }
}
export default StatCardSmall;
