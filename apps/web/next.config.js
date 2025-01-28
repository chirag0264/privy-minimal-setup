const withTM = require("next-transpile-modules")(["@app/core"]);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: Boolean(process.env.ANALYZE),
});

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.extensions = [
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
    };
    return config;
  },
};
const withPlugins = withBundleAnalyzer(withTM(nextConfig));

module.exports = withPlugins;
