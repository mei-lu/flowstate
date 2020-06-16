import React from 'react';

class Level extends React.Component {
    constructor(props) {
        super(props);
        this.state={level: 1, exp: 0, nextLevel: 100};
    }
    render() {
        return <div className='level-wrapper'>
            {/* Level bar and level label */}
            <div className='level-prog-wrapper'>
                <div className='level-label'>Lv {this.state.level}</div>
                {/* Level bar and exp label */}
                <div class='level-bar-exp-wrapper'>
                    <div class='level-bar'>
                        <div class='level-prog' style={{width: (this.props.currExp/this.props.totalExp)*100}}></div>
                    </div>
                    <div className='level-exp'>Exp {this.state.exp}/{this.state.nextLevel}</div>
                </div>
            </div>
        </div>
                
            
    }
}

export default Level;