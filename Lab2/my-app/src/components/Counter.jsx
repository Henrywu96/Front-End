import React from "react";

class Counter extends React.Component {

    // initialize
    constructor() {
        super() //base() ===> parent()

        this.state = {
            count: 0
        }
    }

    handleIncrement() {
        this.setState({
            count: this.state.count + 10
        })

        // this.setState({ count: 1}, () => {
        //     console.log(`clicked...`);
        // })

        console.log(`clicked...`)
    }

    render() {
        return <>
            <button className="like-button" onClick={ (e) => { this.handleIncrement(e) } }>Counter</button>
            counter = {this.state.count} 
        </>
        
    }
}

export default Counter;
