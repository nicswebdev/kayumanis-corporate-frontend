/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = {
    images: {
        domains: [
            "images.unsplash.com",
            "plus.unsplash.com",
            "phpstack-841991-2983120.cloudwaysapps.com",
        ],
    },
};
