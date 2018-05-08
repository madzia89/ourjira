import React, {Component} from 'react'
import {getAllMyTasks, getAllMyTasksByAssignee} from "../../api/task.api";
import {TasksAssigedToMe} from "./component";

class TaskView extends Component {

    state = {
        imBusy: true, //pozwala na pojawienie się spinnera na czas ładowania się komponentów
        tasksCreatedByMe: [],
        tasksAssignedToMe: []

    }

    refresh() {
        this.setState({
            imBusy: true
        })
//najpierw ustawia flagę na true, zaciąga dane, wrzuca je do stanu i kończy bycie busy
        Promise.all([
            getAllMyTasks('wojcicka.ma@gmail.com'),
            getAllMyTasksByAssignee('wojcicka.ma@gmail.com')
        ]).then((data) => {

            const [tasksCreatedByMe, tasksAssignedToMe] = data //to jests to samo co zakomentowane poniżej
            //     const tasksCreatedByMe = data[0]
            //     const tasksAssignedToMe = data[1]

// w poniżyszm nei musimy pisać tasksCreatedByMe: tasksCreatedByMe ponieważ mają takies ame nazwy react od razu je tak przypisze
            this.setState({
                tasksCreatedByMe,
                tasksAssignedToMe,
                imBusy: false

            })
            console.log('tasks data', tasksCreatedByMe, tasksAssignedToMe)
        })

    }

    componentDidMount() {
        this.refresh()
    }

    render() {

        if (this.state.imBusy) {
            return (
                <span>jestem zajęty!</span>
            )
        }

        return (
            <div><h2>Task View</h2>
                <button className="btn btn-block btn-warning"
                        onClick={() => {
                            this.refresh()
                        }}
                >Refresh
                </button>
                <TasksAssigedToMe {...this.state.tasksAssignedToMe}
                refresh={() => {
                    this.refresh()
                }} />
            </div>
        )
    }
}

export default TaskView
