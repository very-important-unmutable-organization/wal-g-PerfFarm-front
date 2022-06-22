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

const basePost = (url, body) => {
    return axios.post(backendUrlBase + url, body);
}


export const login = (username, password) => {
    const body = {username: username, password: password}
    console.log(body);
    return basePost(backendUrls.apiAuthLogin.build(), body)
        .then(resp => {
        if (resp.statusText !== 'OK') {
            return {err: 'Bad request', accessToken: ''}
        }
        console.log(resp.data);
        return {accessToken: resp.data['access_token']}
      })
        .catch(error => {
            return {err: 'Login failed', accessToken: ''}
        });
}

export const signup = (username, password) => {
    return basePost(backendUrls.apiAuthRegister.build(), {data: JSON.stringify({username, password})})
        .then(resp => {
            if (resp.statusText !== 'OK') {
                console.log(resp)
            }
            return resp.data
        })
}

export const getRuns = () => {
    return baseGet(backendUrls.apiRuns.build());
}

export const getMetricNames = () => {
    return baseGet(backendUrls.apiMetricsNames.build())
        .then(resp => {
        return resp.data;
    });
}

export const getMetricByName = (name) => {
    return baseGet(backendUrls.apiMetric.build({name: name})).then(
        resp => {
            return resp.data;
        }
    )
}

export const getAgents = () => {
    // TODO добавить ручку получения агентов
    return ['agent1', 'agent2', 'agent3']
}

export const postTask = (gitRepo, gitSha, agent) => {
    // TODO добавить отправку данных для запуска проверок
}

