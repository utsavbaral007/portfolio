/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    },
  webpack: (config) => {
    config.resolve.alias["handlebars"] = path.resolve(
      "./node_modules/handlebars/lib/index.js"
    );
    return config;
  },
};

export default nextConfig;
