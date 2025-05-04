
const nextConfig = {
  eslint: {
    // Warning instead of error when linting
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning instead of error during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
