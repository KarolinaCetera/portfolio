/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        username: "admin",
        password: "admin",
        cluster: "cluster0",
        key: "portfolio",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      username: "admin",
      password: "admin",
      cluster: "cluster0",
      key: "portfolio",
    },
  };
};

module.exports = nextConfig;
