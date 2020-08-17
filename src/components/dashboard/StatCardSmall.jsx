import React from 'react';

function StatCardSmall() {
    
    return <div className='statcard-small'>
            <p>{this.props.title}</p>
            <p>{this.props.data}</p>
        </div>
    }
    
export default StatCardSmall;
