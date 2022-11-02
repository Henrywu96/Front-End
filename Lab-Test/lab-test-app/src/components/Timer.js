import React from 'react';
import Moment from 'react-moment';

class Timer extends React.Component {
    render() {
        const calendarStrings = {
            Hour : "00",
            Minutes : "00",
            Seconds : "00"
        };

        return (
            <time><Moment calendar={calendarStrings} format="hh:mm:ss" /></time>
        );
    }
}

export default Timer;