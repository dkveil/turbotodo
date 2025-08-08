/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/trpc/:path*",
        destination: "http://localhost:3000/trpc/:path*",
      },
    ];
  },
};

export default nextConfig;
