const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "base.scss";`
  },
}

module.exports = nextConfig
