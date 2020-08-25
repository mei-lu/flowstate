import React from 'react';
import Play from '../../img/timer/play.svg';
import Pause from '../../img/timer/pause.svg';
import Stop from '../../img/timer/stop.svg'
import { gsap } from 'gsap';

class Pomodoro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSetting: 5, //Specified timer time (for resetting after stop)
            seconds: 300, //For splitting minutes and seconds from total seconds
            minutesPlace: 5,
            secondsPlace: '00',
            timerRunning: false,
            cycleDone: true
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.countdown = this.countdown.bind(this);
        this.decideButton = this.decideButton.bind(this);
        this.pause = this.pause.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    componentDidMount() {
        gsap.from(this.pomoRef, 1, {opacity: 0});
    }

    //Decide button rendering
    decideButton() {
        if (!this.state.timerRunning) {
            return <button className='start-btn' onClick={this.countdown}><img src={Play} alt=''></img></button>
        } else {
            gsap.to(this.settingRef, 1, {x: 10});
            return <div>
                <button className='start-btn' onClick={this.pause}><img src={Pause} alt=''></img></button>
                <button className='start-btn' onClick={this.resetTimer}><img src={Stop} alt=''></img></button>
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
        this.setState({timerRunning: false, minutesPlace: this.state.timeSetting, secondsPlace: '00', seconds: this.state.timeSetting * 60});
        this.setState({cycleDone: true});
    }

    //Pause timer
    pause() {
        this.setState({timerRunning: false});
    }

    //Start timer
    countdown() {
        this.setState({timerRunning: true});
        this.setState({cycleDone: false});
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
        return <div className='pomodoro' ref={element => this.pomoRef = element}>
            <div className='timer-settings'>
                {this.state.cycleDone ? <button className='increment-btn' onClick={this.decrement} ref={element => this.settingRef = element}>-</button> : null}
                <p>{Math.floor(this.state.minutesPlace)}:{this.state.secondsPlace}</p>
                {this.state.cycleDone ? <button className='increment-btn' onClick={this.increment} ref={element => this.settingRef = element}>+</button> : null}
            </div>
            {/* Decide button rendering based on timer running */}
            {this.decideButton()}
            
        </div>
    }
}

export default Pomodoro;