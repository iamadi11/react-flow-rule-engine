'use client';
import React, { JSX, ReactNode } from 'react';

import ReactQueryClient from './ReactQueryClient';

const ClientProvider = ({ children }: { children: ReactNode }): JSX.Element => (
    <ReactQueryClient>{children}</ReactQueryClient>
);

export default ClientProvider;
