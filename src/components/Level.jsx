import React from 'react';

class Level extends React.Component {
    constructor(props) {
        super(props);
        this.state={level: 1, exp: 0, nextLevel: 100};
    }
    render() {
        return <div className='level-wrapper'>
            {/* User name and level */}
            <div className='level-user'> 
                <p>Level {this.state.level}</p>
                <p>Exp {this.state.exp}/{this.state.nextLevel}</p>
            </div>
            {/* Progress bar and exp label */}
            <div class='level-bar'>
                <div class='level-prog' style={{width: (this.props.currExp/this.props.totalExp)*100}}></div>
            </div>
        </div> 
    }
}

export default Level;