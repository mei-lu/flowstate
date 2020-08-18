import React from 'react';

function StatCardSmall(props) {
    return <div className='statcard-small'>
            <p>{props.title}</p>
            <p>{props.data}</p>
        </div>
    }
    
export default StatCardSmall;
