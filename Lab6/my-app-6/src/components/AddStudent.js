import React from "react";
import axios from "axios";

class AddStudent extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {name: ""}
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userName = {name: this.state.name};
        // Post request
        axios.post('https://jsonplaceholder.typicode.com/users', userName)
        .then(function(res) {
            console.log(res);
            this.props.addUsers(res.data);
        }, (err) => {
            console.log(err);
        });
    }

    render() { 
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name: <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </>
        );
    }
}

export default AddStudent;