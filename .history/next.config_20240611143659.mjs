/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "lh3.googleusercontent.com",
      }
    ],
  },
  async rewrites(){
    return [
      {
        source: 'htt'
      }
    ]
  }
};

export default nextConfig;
