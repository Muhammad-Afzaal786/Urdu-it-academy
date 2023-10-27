//  @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.urduitacademy.com"],
    unoptimized: true,
  },

  //output: "export",
  async headers() {
    return [
      {
        source: "/api/(.*)",
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
