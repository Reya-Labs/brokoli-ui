module.exports = {
  stories: ['../src/**/**/*.stories.mdx', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-themes', '@storybook/addon-essentials'],
  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (webpackConfig) => {
    // This modifies the existing image rule to exclude `.svg` files
    // since we handle those with `@svgr/webpack`.
    const imageRule = webpackConfig.module.rules.find((rule) => {
      if (typeof rule !== 'string' && rule.test instanceof RegExp) {
        return rule.test.test('.svg');
      }
    });
    if (typeof imageRule !== 'string') {
      imageRule.exclude = /\.svg$/;
    }

    webpackConfig.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return webpackConfig;
  },

  docs: {
    autodocs: false,
  },
};
