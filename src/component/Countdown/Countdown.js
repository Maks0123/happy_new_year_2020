import React from 'react';
import moment from 'moment';

export default class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        

        if (!seconds) {
            return null;
        }

        return (
            <div>
                
                <div className="countdown-wrapper">
                    {days && (
                        <div className="countdown-item">
                           
                           <h3> {days} 
                            </h3> <span>days</span>
                          
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                         
                           <h3>{hours}
                            </h3> 
                            <span>hours</span> 
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                           
                            <h3>{minutes}
                            </h3>
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                           
                            <h3>{seconds}
                           </h3>
                           <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}



