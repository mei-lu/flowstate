import React from 'react';

function TaskCard(props) {
    return <div className='task-card'>
        <p>{props.due}</p>
        <div className='task-title'>{props.title}</div>
        <p>{props.description}</p>
        <p>{props.steps}</p>
        <p>{props.dueDate}</p>
    </div>
}
export default TaskCard;