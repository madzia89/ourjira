import React, {Component} from 'react'


const TasksAssigedToMe = ({data}) => {
    return (
        <div>
            <ul>
                {data.map((task, key)=>{

                    return <li key={key}> {JSON.stringify(task)}</li>

                })}
            </ul>
        </div>
    )
}

export {TasksAssigedToMe}