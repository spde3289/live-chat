/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
