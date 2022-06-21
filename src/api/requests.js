import axios from 'axios';
import {backendUrls, backendUrlBase} from "./urls";

const headers  = {
    'Content-Type': 'application/json',
}

const baseGet = (url, config={}) => {
    return axios.get(backendUrlBase + url, {
        headers,
        ...config
    })
}

const basePost = (url, config) => {
    return axios.post(backendUrlBase + url, {
        headers,
        ...config
    })
}


// export const login = (username, password) => {
//     return basePost(backendUrls.apiAuthLogin.build(), {data: JSON.stringify({username, password})})
//       .then(resp => {
//         if (resp.statusText !== 'OK') {
//             return {err: 'Bad request', accessToken: ''}
//         }
//
//          return {accessToken: resp.data['access_token']}
//       })
// }
//
// export const signup = (username, password) => {
//     return basePost(backendUrls.apiAuthRegister.build(), {data: JSON.stringify({username, password})})
//         .then(resp => {
//             if (resp.statusText !== 'OK') {
//                 console.log(resp)
//             }
//             return resp.data
//         })
// }

export const getRuns = () => {
    return baseGet(backendUrls.apiRuns.build())
}

export const getAgents = () => {
    // TODO добавить ручку получения агентов
    return ['agent1', 'agent2', 'agent3']
}

export const postTask = (gitRepo, gitSha, agent) => {
    // TODO добавить отправку данных для запуска проверок
}

