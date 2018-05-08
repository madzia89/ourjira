import React, {Component} from 'react'

import TaskView from './views/TaskView/index'

import {getAllUsers} from "./api/users.api";
import {getAllTasks} from "./api/task.api";

class App extends Component {
    componentDidMount() {
        getAllUsers()
        getAllTasks()
    }

    render() {


        return (
            <div>
                <div>test</div>
                <TaskView/>
            </div>
        )
    }
}

export default App
