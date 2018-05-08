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

    const url = `${TASK_RESOURCE_PATH}/${task_id}/assing-to/${assignee}`

    if (assignee.length) {
        return fetch(url)
            .then(fetchLogger)
    }
}

export const assignedToMeTask = (taskId, assignee) => {

    return fetch(`${TASK_RESOURCE_PATH}/${taskId}/assing-to/${assignee}`)
        .then(fetchLogger)
}