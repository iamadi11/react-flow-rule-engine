import { AxiosError } from 'axios';

import logger from '@/logger';

import AxiosService from './axiosService';

interface ApiServiceOptions {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    data?: unknown;
    headers?: Record<string, string>;
    timeout?: number;
    baseURL?: string;
    params?: Record<string, string | number | boolean>;
}

const apiService = async (options: ApiServiceOptions): Promise<unknown> => {
    const { url, method = 'GET', data, headers, timeout, baseURL, params } = options;

    const config = {
        method,
        url,
        data,
        headers,
        timeout,
        baseURL,
        params,
    };

    try {
        const axiosInstance = AxiosService.getInstance({ baseURL, timeout, headers }).getAxiosInstance();
        const response = await axiosInstance(config);
        return response.data;
    } catch (error) {
        if (AxiosService.isCancel(error as AxiosError)) {
            if (error instanceof Error) {
                logger.error('Request canceled', error.message);
            }
        } else {
            logger.error('Request failed', error);
        }
        throw error;
    }
};

export { apiService };
