import { Url } from '../utils/url'

export const backendUrlBase = process.env.REACT_APP_BACKEND_URL || '';

export const backendUrls = {
    // apiAuthLogin: new Url( '/auth/login'),
    // apiAuthRegister: new Url('/auth/register'),
    apiRuns: new Url('/auth/runs'),
    apiRun: new Url('/auth/run/:runId'),
}