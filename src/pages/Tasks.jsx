import React from 'react';
import Column from '../components/tasks/Column';

function Tasks(props) {
    return( 
    <div className='task-wrapper'>
        <h3 className='task-heading'>Tasks</h3>
        <div className="tasks">
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
        </div>
    </div>
    );
}
export default Tasks;