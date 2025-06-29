'use client';
import React from 'react';

import clsx from 'clsx';

import Layout from '@/components/Layout';

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Layout>
        <Layout.Header>Header</Layout.Header>
        {/* <Layout.Sidebar>
                            <div>My Sidebar</div>
                        </Layout.Sidebar> */}
        <Layout.Main>{children}</Layout.Main>
        <Layout.Footer className={clsx('px-2', 'size-full backdrop-blur-sm')}>
            <div className="flex items-center justify-between px-6 py-3">
                <div>Next Boilerplate</div>
            </div>
        </Layout.Footer>
    </Layout>
);

export default Template;
