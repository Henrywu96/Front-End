import React from "react";
import Moment from 'react-moment';

class Timer extends React.Component {
    render() {
        return (
            <time><Moment format="YYYY-MM-DD hh:mm:ss" /></time>
        );
    }
}

export default Timer;