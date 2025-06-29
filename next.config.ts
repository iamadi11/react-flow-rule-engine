import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: false,
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/home',
    //             permanent: true,
    //         },
    //     ];
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    },
};

export default nextConfig;
