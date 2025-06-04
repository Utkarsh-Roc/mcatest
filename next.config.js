const path = require("path");

module.exports = {
  reactStrictMode: true,
  unoptimized: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  // Add this to enable styled-jsx
  experimental: {
    forceSwcTransforms: true,
  }
};