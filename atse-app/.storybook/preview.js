/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  layout: "fullscreen",
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  },
  //   cssVariables: {
  //     files: {
  //       choose,
  //       corporate,
  //       visit,
  //       shared,
  //     },
  //     defaultTheme: "shared",
  //   },
  themes: {
    default: "Theme 1",
    list: [
      {
        name: "ATSE 1",
        class: "theme--1",
        color: "#013d00",
      },
      {
        name: "ATSE 2",
        class: "theme--2",
        color: "#a3e5e0",
      },
      {
        name: "ATSE 3",
        class: "theme--3",
        color: "#001f4d",
      },
      {
        name: "ATSE 4",
        class: "theme--4",
        color: "#ffcfe8",
      },
    ],
  },
  decorators: [(Story) => <Story />],
};

export default preview;
