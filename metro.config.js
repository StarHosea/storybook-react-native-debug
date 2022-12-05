const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const config = getDefaultConfig(__dirname);
const { getDepsSourceFolders, resolveModuleRequest } = require('@tw/tw-dev-rn');
const twModulesToLink = ['@tw/tw-runtime-rn', '@tw/tw-runtime-react'];
// Monorepo
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');
const sourceFolders = getDepsSourceFolders(__dirname, twModulesToLink);
config.resolver.resolverMainFields = ['sbmodern', 'sbmain', ...config.resolver.resolverMainFields];
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const result = resolveModuleRequest(__dirname, twModulesToLink, moduleName);
  if (result) {
    return result;
  }
  return context.resolveRequest(context, moduleName, platform);
};
config.watchFolders = [...config.watchFolders, './.storybook', ...sourceFolders];
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

config.resolver.sourceExts.push('mjs');
module.exports = config;
