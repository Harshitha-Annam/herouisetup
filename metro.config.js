const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = defaultConfig;

const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

// Merge SVG config into default config
const mergedConfig = mergeConfig(defaultConfig, svgConfig);

// Wrap final config with Uniwind
module.exports = withUniwindConfig(mergedConfig, {
  cssEntryFile: './global.css',
  dtsFile: './uniwind-types.d.ts',
});
