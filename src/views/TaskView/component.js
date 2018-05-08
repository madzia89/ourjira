import React from 'react'



const TasksAssigedToMe = ({data}) => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>title</th>
                    <th>status</th>
                    <th>creator</th>
                    <th>assignee</th>
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
                        <td>{JSON.stringify(task.hours)}</td>
                        <td>
                            <button>akcja</button>
                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}

export {TasksAssigedToMe}