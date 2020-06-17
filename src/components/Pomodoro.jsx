import React from 'react'

class Pomodoro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSetting: 5, //Specified timer time (for resetting after stop)
            seconds: 300, //For splitting minutes and seconds from total seconds
            minutesPlace: 5,
            secondsPlace: '00',
            timerRunning: false
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.countdown = this.countdown.bind(this);
        this.decideButton = this.decideButton.bind(this);
        this.pause = this.pause.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    //Decide button rendering
    decideButton() {
        if (!this.state.timerRunning) {
            return <button className='start-btn' onClick={this.countdown}>Start</button>
        } else {
            return <div>
                <button className='start-btn' onClick={this.pause}>Pause</button>
                <button className='start-btn' onClick={this.resetTimer}>Cancel</button>
            </div>
        }
    }

    //Decrement timer setting
    decrement() {
        let afterDecrement = this.state.seconds - 300;
        if (afterDecrement >= 300) this.setState({seconds: afterDecrement, timeSetting: afterDecrement/60, minutesPlace: afterDecrement/60});
    }
    //Increment timer setting
    increment() {
        let afterIncrement = this.state.seconds + 300;
        if (afterIncrement <= 3600) this.setState({seconds: afterIncrement, timeSetting: afterIncrement/60, minutesPlace: afterIncrement/60});
    }

    //Reset timer
    resetTimer() {
        this.setState({timerRunning: false, minutesPlace: this.state.timeSetting, secondsPlace: '00'});
    }

    //Pause timer
    pause() {
        this.setState({timerRunning: false});
    }

    //Start timer
    countdown() {
        this.setState({timerRunning: true});
        let runTimer = setInterval(() => {
            //Stop timer
            if (!this.state.timerRunning) {
                clearInterval(runTimer);
            }

            //Run timer
            if (this.state.timerRunning) {
                this.setState({seconds: this.state.seconds - 1});
                this.setState({minutesPlace: Math.floor(this.state.seconds/60)});

                let timerSeconds = this.state.seconds - Math.floor(this.state.seconds/60) * 60;

                if (timerSeconds < 10) {
                    this.setState({secondsPlace: '0' + timerSeconds});
                } else {
                    this.setState({secondsPlace: timerSeconds});
                }
                //Reset timer to original state
                if (this.state.seconds === 0) this.resetTimer();
            }
        }, 1000);
    }

    render() {
        return <div className='pomodoro'>
            <div className='timer-settings'>
                <button className='increment-btn glow' onClick={this.decrement}>-</button>
                <p>{Math.floor(this.state.minutesPlace)}:{this.state.secondsPlace}</p>
                <button className='increment-btn glow' onClick={this.increment}>+</button>
            </div>
            {/* Decide button rendering based on timer running */}
            {this.decideButton()}
            
        </div>
    }
}

export default Pomodoro;