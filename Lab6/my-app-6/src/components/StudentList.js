import React from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

class StudentList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {users: []}
    //     this.addUsers = this.addUsers.bind(this);
    // }

    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        // Get request
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data;
            this.setState({users});
        });
    }

    // Add users
    addUsers = (userName) => {
        let data = {
            name: userName.user.name,
            id: userName.user.id
        };
        this.setState({
            users: [...this.state.users, data]
        });
    }

    // Delete users
    deleteUsers = (userId) => {
        const deleteUsers = this.state.users.filter(item => item.id !== userId);
        this.setState({
            users: deleteUsers
        });
    }

    render() {
        return (
            <>
                <AddStudent addUsers={this.addUsers} />
                <ul>
                    {this.state.users.map(user => {
                        return <li key={user.id}>{user.name} <br /><DeleteStudent id={user.id} deleteUsers={this.deleteUsers} /></li>
                    })}
                </ul>
            </>
        );
    }
}
 
export default StudentList;