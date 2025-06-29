/* eslint-disable no-use-before-define */
import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

class AxiosService {
    private static instance: AxiosService | null = null;
    private axiosInstance: AxiosInstance;

    constructor(config: { baseURL?: string; timeout?: number; headers?: Record<string, string> } = {}) {
        this.axiosInstance = axios.create({
            baseURL: config.baseURL || window.location.origin,
            timeout: config.timeout || 30000,
            headers: config.headers || {},
            ...config,
        });

        this.axiosInstance.interceptors.request.use(
            (reqConfig: InternalAxiosRequestConfig) => reqConfig,
            (error: AxiosError) => Promise.reject(error)
        );

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => Promise.reject(error)
        );
    }

    static getInstance(config: {
        baseURL?: string;
        timeout?: number;
        headers?: Record<string, string>;
    }): AxiosService {
        if (!AxiosService.instance) {
            AxiosService.instance = new AxiosService(config);
        }
        return AxiosService.instance;
    }

    getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }

    static isCancel(error: AxiosError): boolean {
        return axios.isCancel(error);
    }

    static get axios(): typeof axios {
        return axios;
    }
}

export default AxiosService;
