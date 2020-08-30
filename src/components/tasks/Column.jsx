import React from 'react';
import TaskCard from '../tasks/TaskCard';

const Column = (props) => {
    return(
        <div className='column'>
            <div className='column-header'>
                <div className='column-name'>
                    Priority {props.name}
                    <p className='task-count'>{props.count}3</p>
                </div>
                <p>...</p>
            </div>
            <div className='column-tasks'>
                {props.tasks}
                <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
                <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
                <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
                <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
                <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
                <TaskCard due='Sept 12, 2020' title='Tidy up' description='Organize work space'/>
            </div>
        </div>
    );
}

export default Column;