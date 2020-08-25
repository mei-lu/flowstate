import React from 'react';
import TaskCard from '../components/tasks/TaskCard';

function Tasks() {
    return <div className='tasks-wrapper'>
        <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
    </div>
}
export default Tasks;