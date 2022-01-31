const path = require('path');
const withMDX = require('@next/mdx')({
  pageExtensions: ['mdx', 'md', 'jsx', 'js'],
  target: 'serverless',
});


module.exports = {
  withMDX,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
