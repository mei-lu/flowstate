import React from 'react'

class Pomodoro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSetting: 5, //Specified timer time (for resetting after stop)
            seconds: 300, //For splitting minutes and seconds from total seconds
            minutesPlace: 5,
            secondsPlace: '00',
            timerRunning: true
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.countdown = this.countdown.bind(this);
    }
    //Decrement timer setting
    decrement() {
        let afterDecrement = this.state.seconds - 300;
        if (afterDecrement >= 300) this.setState({seconds: afterDecrement, timeSetting: afterDecrement/60});
    }
    //Increment timer setting
    increment() {
        let afterIncrement = this.state.seconds + 300;
        if (afterIncrement <= 3600) this.setState({seconds: afterIncrement, timeSetting: afterIncrement/60});
    }
    //Start timer
    countdown() {
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
                if (this.state.seconds === 0) this.setState({timerRunning: false, minutesPlace: this.state.timeSetting, secondsPlace: '00'});
            }
        }, 1000);
    }

    render() {
        return <div className='pomodoro'>
            <div className='timer-settings'>
                <button className='increment-btn' onClick={this.decrement}>-</button>
                <p>{Math.floor(this.state.minutesPlace)}:{this.state.secondsPlace}</p>
                <button className='increment-btn' onClick={this.increment}>+</button>
            </div>
            <button className='start-btn' onClick={this.countdown}>Start</button>
        </div>
    }
}

export default Pomodoro;