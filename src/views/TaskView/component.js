import React from 'react'
import * as logic from './logic'


const TasksAssigedToMe = ({data, refresh}) => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>title</th>
                    <th>status</th>
                    <th>creator</th>
                    <th>assignee</th>
                    <th>description</th>
                    <th>hours</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>

                {data.map((task, key) => {
                    return (<tr key={key}>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>{task.creator}</td>
                        <td>{task.assignee}</td>
                        <td>{task.description}</td>
                        <td>{JSON.stringify(task.hours)}</td>
                        <td>
                            <button className="btn btn-default"
                                    onClick={() => {
                                        logic.assignToUser(task._id, refresh)
                                    }}>
                                assignTasksTo
                            </button>

                            <button className="btn btn-default"
                                    onClick={() => {
                                        logic.logHoursToTask(task._id, refresh)
                                    }}>
                                logHoursToTask
                            </button>

                            <button className="btn btn-default"
                                    onClick={() => {
                                        logic.changeStatus(task._id, refresh)
                                    }}>
                                changeStatus
                            </button>

                            <button className="btn btn-default"
                                    onClick={() => {
                                        logic.changeDescription(task._id, refresh)
                                    }}>
                                changeDescription
                            </button>

                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}

export {TasksAssigedToMe}