import React from 'react';

function TaskCard() {
    return <div>
        <div className='task-title'>{this.props.title}</div>
        <p>{this.props.description}</p>
        <p>{this.props.steps}</p>
        <p>{this.props.dueDate}</p>
    </div>
}
export default TaskCard;