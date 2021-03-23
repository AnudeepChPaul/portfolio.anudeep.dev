const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true
})

module.exports = withBundleAnalyzer({
  env: {}
  , webpack: (config, { dev, isServer }) => {
    return config
  }
})