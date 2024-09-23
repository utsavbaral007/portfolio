/** @type {import('next').NextConfig} */
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  outputFileTracingIncludes: {
    '/api/email': ['./src/app/template/mailTemplate.handlebars'],
  },
  webpack: (config) => {
    config.resolve.alias["handlebars"] = path.resolve(
      "./node_modules/handlebars/lib/index.js"
    );
    return config;
  },
};

export default nextConfig;
