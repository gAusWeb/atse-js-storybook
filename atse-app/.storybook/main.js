/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",

    "storybook-addon-themes",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/preset-scss",
    // "@whitespace/storybook-addon-html", // causes SB build error
    // "@etchteam/storybook-addon-css-variables-theme",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  //   staticDirs: ["../public"], // picked up from project package.json
  // staticDirs: ['../public', { from: '../public', to: 'public' }],
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"],
    // });

    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: ["@svgr/webpack"],
    });

    console.log(config.module?.rules);

    // const imageRule = config.module?.rules?.find((rule) => {
    //   const test = rule.test.test;

    //   if (!test) {
    //     return false;
    //   }

    //   return test.test(".svg");
    // });

    // imageRule.exclude = /\.svg$/;

    // config.module?.rules?.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"],
    // });

    return config;
  },
  //   async webpackFinal(config) {
  //     // console.dir(config, { depth: null });
  //     // config.module.rules.push({
  //     //   test: /\.scss$/,
  //     //   use: ["style-loader", "css-loader", "sass-loader"],
  //     //   include: path.resolve(__dirname, "../"),
  //     // });
  //     const rules = config.module.rules;
  //     // const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));
  //     // fileLoaderRule.exclude = /\.svg$/;

  //     config.output.filename = "static/js/[name].[contenthash:8].js";

  //     const imageRule = config.module?.rules?.find(rule => {
  //         const test = rule.test

  //         if (!test) {
  //           return false
  //         }

  //         return test.test('.svg')
  //       })

  //       imageRule.exclude = /\.svg$/

  //       config.module?.rules?.push({
  //         test: /\.svg$/,
  //         use: ['@svgr/webpack']
  //       })

  //     // config.module.rules
  //     //   .filter((rule) => rule.test.test(".svg"))
  //     //   .forEach((rule) => (rule.exclude = /\.svg$/i));

  //     // add SVGR instead
  //     // config.module.rules.push({
  //     //   test: /\.svg$/,
  //     //   use: [
  //     //     {
  //     //       loader: "@svgr/webpack",
  //     //     },
  //     //     {
  //     //       loader: "file-loader",
  //     //       options: {
  //     //         name: "static/media/[path][name].[ext]",
  //     //       },
  //     //     },
  //     //   ],
  //     //   type: "javascript/auto",
  //     //   issuer: {
  //     //     and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
  //     //   },
  //     // });

  //     // config.module.rules.push({
  //     //   //   test: /\.svg$/,
  //     //   //   enforce: "pre",
  //     //   //   loader: require.resolve("@svgr/webpack"),
  //     //   test: /\.svg$/,
  //     //   use: [
  //     //     {
  //     //       loader: "@svgr/webpack",
  //     //     },
  //     //     {
  //     //       loader: "file-loader",
  //     //       options: {
  //     //         name: "static/[path][name].[ext]",
  //     //       },
  //     //     },
  //     //   ],
  //     //   type: "javascript/auto",
  //     //   issuer: {
  //     //     and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
  //     //   },
  //     // });

  //     return config;
  //   },
  // previewHead: (head) => `
  //   ${head}
  //   ${
  //     process.env.ANALYTICS_ID
  //       ? '<script src="./assets/js/atse-js.bundle.js"></script>'
  //       : ""
  //   }
  // `,
};
export default config;
