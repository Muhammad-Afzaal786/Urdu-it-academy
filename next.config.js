//  @type {import('next').NextConfig}

  // reactStrictMode: true,
  // distDir: "build",
  // swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  // images: {
  //   domains: ["www.urduitacademy.com"],
  //   unoptimized: true,
  // },

// output: "export",
const nextConfig = {
  reactStrictMode: true,
  distDir: "out", 
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.urduitacademy.com"],
    unoptimized: true,
  },
  //target: "experimental-serverless-trace",
};

module.exports = nextConfig;
