import { Url } from '../utils/url'

export const backendUrlBase = process.env.REACT_APP_BACKEND_URL || '';

export const backendUrls = {
    apiAuthLogin: new Url( '/api/auth/login'),
    apiAuthRegister: new Url('/auth/register'),
    apiRuns: new Url('/api/runs'),
    apiRun: new Url('/auth/run/:runId'),
    apiMetricsNames: new Url('/api/metrics/names'),
    apiMetric: new Url('/api/metrics/:name'),
}