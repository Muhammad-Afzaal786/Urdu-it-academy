
//  @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode : true,
  distDir: "build",
  swcMinify: true,
  experimental : {
    appDir: true
  },
  images: {
    domains: ["www.urduitacademy.com"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
