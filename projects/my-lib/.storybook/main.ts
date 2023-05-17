import type { StorybookConfig } from "@storybook/angular";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    '@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-actions',
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
		'@storybook/preset-scss',
    {
			name: '@storybook/addon-styling',
			options: {
				sass: {
					implementation: require('sass'),
				},
        postCss: {
          implementation: require("postcss"),
        },
			},
		},
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
		autodocs: true,
  },
};
export default config;
