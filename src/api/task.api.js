import {fetchLogger} from './utils.api'

const TASK_RESOURCE_PATH = 'https://tasks.isa.valuepoint.pl/tasks'

export const addTaskToUser = (creator, title) => {
    const url = `${TASK_RESOURCE_PATH}/add`

    const task = {
        creator: creator,
        title: title
    }

    const fetchconfig = {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, fetchconfig)
        .then(fetchLogger)
}

export const deleteTask = (id) => {

    const urlek = `${TASK_RESOURCE_PATH}/${id}`

    const toDelete = {
        method: "DELETE"
    }
    return fetch(urlek, toDelete)
        .then(fetchLogger)
}

export const getAllTasks = () => {
    return fetch(`${TASK_RESOURCE_PATH}`)
        .then(fetchLogger)
}

export const getAllMyTasks = (creator) => {

    return fetch(`${TASK_RESOURCE_PATH}/search/creator/${creator}`)
        .then(fetchLogger)
}

export const getAllMyTasksByAssignee = (assignee) => {

    return fetch(`${TASK_RESOURCE_PATH}/search/assignee/${assignee}`)
        .then(fetchLogger)
}


export const assignTaskToUser = (task_id) => {

    const assignee = prompt('do kogo ma być przypisany task?')

    const url = `${TASK_RESOURCE_PATH}/${task_id}/assign-to/${assignee}`

    const fetchConfig = {
        method: 'PATCH',
        body: JSON.stringify({
            "assignee": assignee
        }),
        header: {
            'Content-Type': 'application/json'
        }
    }

    if (assignee) {
        return fetch(url, fetchConfig)
            .then(fetchLogger)
    } else
        {
        return Promise.resolve('')
    }
}


export const assignedToMeTask = (taskId, assignee) => {

    return fetch(`${TASK_RESOURCE_PATH}/${taskId}/assing-to/${assignee}`)
        .then(fetchLogger)
}


export const changeDescriptionOfTassk = task_id => {
    const description = prompt('change description of task')

    const url = `${TASK_RESOURCE_PATH}/${task_id}/change-description`

    const fetchConfig = {
        method: 'PATCH',
        body: JSON.stringify({
            "description": description
        }),
        header: {
            'Content-Type': 'application/json'
        }
    }
    if (description){
        return fetch(url, fetchConfig)
            .then(fetchLogger)
    }
    else {
        return Promise.resolve('')
    }
}


export const changeStatusOfTask = task_id => {
    const status = prompt('write status')

    const url = `${TASK_RESOURCE_PATH}/${task_id}/change-status`

    const fetchConfig = {
        method: 'PATCH',
        body: JSON.stringify({
            "status": status
        }),
        header: {
            'Content-Type': 'application/json'
        }
    }
    if (status){
        return fetch(url, fetchConfig)
            .then(fetchLogger)
    }
    else {
        return Promise.resolve('')
    }
}


export const changeLogHours = task_id => {
    const hours = prompt('write hours')
    const logger = prompt('write logger')

    const url = `${TASK_RESOURCE_PATH}/${task_id}/log-hours`

    const fetchConfig = {
        method: 'PATCH',
        body: JSON.stringify({
            "hours": hours,
            "logger": logger
        }),
        header: {
            'Content-Type': 'application/json'
        }
    }
    if (hours, logger){
        return fetch(url, fetchConfig)
            .then(fetchLogger)
    }
    else {
        return Promise.resolve('')
    }
}
