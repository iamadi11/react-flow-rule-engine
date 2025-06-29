'use client';
import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { apiService } from '@/apiService';
import logger from '@/logger';

const Home: React.FC = () => {
    const { data: queryData } = useQuery({
        queryKey: ['health'],
        queryFn: () => apiService({ url: '/api/health' }),
    });
    logger.info(queryData);
    // useEffect(() => {
    //     //TODO : Remove this code
    //     apiService({ url: '/api/health' }).then((response) => {
    //         logger.info(response);
    //     });
    // }, []);
    return <div />;
};

export default Home;
