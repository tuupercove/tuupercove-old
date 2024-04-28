import pkg from './next-i18next.config.js';
import { loadCustomBuildParams } from './next-utils.config.js';

const isProd = process.env.NODE_ENV === 'production'

const {i18n} = pkg;
const { esmExternals = false, tsconfigPath } =
  loadCustomBuildParams()

/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance',
        permanent: true,
      },
    ]
  },
  // assetPrefix: isProd ? 'https://cdncf.vtuberhub.in.th' : undefined,
  //generateBuildId: async () => {
    // This could be anything, using the latest git hash
  //  return process.env.GIT_HASH
  //},
  experimental: {
    urlImports: ['https://fonts.googleapis.com', 'https://www.youtube.com', 'https://cdncf.vtuberhub.in.th'],
    esmExternals,// https://nextjs.org/blog/next-11-1#es-modules-support
  },
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
  extends: [
    'plugin:@next/next/recommanded'
  ],
  eslint: {
    dirs: [
      'src',
      'pages', 
      'utils'
    ], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

export default nextConfig;
