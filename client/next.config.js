/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@mui/icons-material/?(((\\w*)?/?)*)": {
      transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
    },
  },
  publicRuntimeConfig: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
};

module.exports = nextConfig;
