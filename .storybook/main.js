const path = require('path');
module.exports = {
  staticDirs: ['./public'],
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
  },
  webpackFinal: async (config, { configType })=>{
    // Make whatever fine-grained changes you need
    // Return the altered config
    config.resolve.alias = {
       ...config.resolve.alias,
      '@tw/tw-runtime-rn': path.resolve(__dirname, '../../tw-runtime-rn/src'),
      '@tw/tw-runtime-react': path.resolve(__dirname, '../../tw-runtime-react/src'),
    }
    return config;
  }
};
