const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  ...getDefaultConfig(__dirname),
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'mjs', 'json'], //add here
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
