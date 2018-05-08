import {fetchLogger} from './utils.api'

const USER_RESOURCE_PATH = `http://tasks.isa.valuepoint.pl/users`

export const getAllUsers = () => {

    return fetch(`${USER_RESOURCE_PATH}`)
        .then(fetchLogger)
}

export const getMyUser = (id) => {

    //w poniższy sposób można zaisać adres do stringa nazywa się to string templates
    // i wówczas zamiast http w fetchu można wpisać zmienną
    //
    const url = `${USER_RESOURCE_PATH}${id}`
    //
    // const _url = `http://tasks.isa.valuepoint.pl/users/${id}`

    return fetch(url)
        .then(fetchLogger)
}