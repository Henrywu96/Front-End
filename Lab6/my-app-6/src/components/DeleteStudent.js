import React from "react";
import axios from "axios";

class DeleteStudent extends React.Component {
    handleSubmit = (id, e) => {
        // Delete request
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
        .then((res) => {
            console.log(res);
            this.props.deleteUsers(this.props.id);
        }, (err) => {
            console.log(err);
        });
    }

    render() { 
        return (
            <>
                <button type="submit" onClick={this.handleSubmit}>Delete</button>
            </>
        );
    }
}
 
export default DeleteStudent;