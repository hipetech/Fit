// eslint-disable-next-line no-undef,@typescript-eslint/no-var-requires
const {getDefaultConfig, mergeConfig} = require("@react-native/metro-config");

// eslint-disable-next-line no-undef
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // eslint-disable-next-line no-undef
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
};

// eslint-disable-next-line no-undef
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
