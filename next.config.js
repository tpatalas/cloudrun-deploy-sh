module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: "standalone",
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "production" ? false : true,
  },
});
