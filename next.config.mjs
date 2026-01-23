/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/map",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
