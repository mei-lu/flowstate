import React from 'react';
import TaskCard from '../components/kanban/TaskCard';

class Kanban extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return <div>
            <TaskCard title='Test1' description='Description'/>
        </div>
       }
}

export default Kanban;