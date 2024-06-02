/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
