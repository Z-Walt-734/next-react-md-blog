const path = require('path');
const withMDX = require('@next/mdx')({
  pageExtensions: ['mdx', 'md', 'jsx', 'js'],
  target: 'serverless',
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({}), {
  
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
  withMDX,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
