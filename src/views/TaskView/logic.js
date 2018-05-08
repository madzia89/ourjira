import {changeDescriptionOfTassk} from "../../api/task.api";
import {assignTaskToUser} from "../../api/task.api";
import {changeStatusOfTask} from "../../api/task.api"
import {changeLogHours} from "../../api/task.api"


export const assignToUser = (task_id, refresh) => {
    assignTaskToUser(task_id).then(() => {
        refresh()
    })
}

export const logHoursToTask = (task_id, refresh) => {
    changeLogHours(task_id).then(() => {
        refresh()
    })
}

export const changeStatus = (task_id, refresh) => {
    changeStatusOfTask(task_id).then(() => {
        refresh()
    })
}

export const changeDescription = (task_id, refresh) => {
    changeDescriptionOfTassk(task_id).then(() => {
        refresh()
    })
}

