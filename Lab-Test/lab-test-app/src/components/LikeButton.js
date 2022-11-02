import React from 'react';

class LikeButton extends React.Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement = (e) => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <>
                <button className="like-button" onClick={ this.handleIncrement }>Like</button> {this.state.count} Likes
            </>
        );
    }
}

export default LikeButton;