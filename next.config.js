//  @type {import('next').NextConfig}
const nextConfig = {
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
  reactStrictMode: true,
  distDir: "out", // Or use the default "out" if it matches your project's configuration.
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.urduitacademy.com"],
    unoptimized: true,
  },
  target: "experimental-serverless-trace",
};

module.exports = nextConfig;
