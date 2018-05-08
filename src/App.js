import React, {Component} from 'react'
import {getAllUsers} from "./api/users.api";
import {getAllTasks} from "./api/task.api";

class App extends Component {
    componentDidMount() {
        getAllUsers()
        getAllTasks()
    }
    render() {


        return (
           <div>test</div>
        )
    }
}

export default App
