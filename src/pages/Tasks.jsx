import React from 'react';
import TaskCard from '../components/tasks/TaskCard';

function Tasks() {
    return( 
    <div>
        <div className='column'>
            <div className='column-name'>
                <p>Priority</p>
                <p>...</p>
            </div>
            <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
            <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
            <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
        </div>
    </div>
    );
}
export default Tasks;