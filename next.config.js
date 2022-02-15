

module.exports = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader:'@svgr/webpack', options: { icon: true }  }],
    });

    return config;
  }
}
