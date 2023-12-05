# Code base overview (files paths are relative to this file):
- CSS/JS/Fonts/Images/Icons FE assets live here: `./src`.
- JSX/HTML assets live here: `./atse-app/src/stories/components`.
- Webpack will compile all FE assets for both FE and Prod.
- Webpack code watchers will be activated when starting FE development mode and will auto recompile, but you MUST manually refresh storybook after each change.
- Storybook will load the final, Webpack compiled assets (CSS/JS/Fonts/Icons) into storybook for visual/functional display purposes - but will not actually compile any FE assets.
- Node scripts have been setup in the FE package.json file that will administer both, FE and Prod builds - see compilation steps below, for more on this.

# Env Setting Prerequisites
- Node Version: 16.14.0
- NPM Version: 8.3.1
- if not installed, install yarn, globally: `npm i -g yarn` (one-off)

# Site Compilations
  ## FE - Local dev-env/development commands
  1. `yarn initialSetup` - needs to be run once on initial setup, or if new packages installed in future
  2. `yarn startStorybook`

  ## Standalone Storybook build
  1. `yarn initialSetup` - needs to be run once on initial setup, or if new packages installed in future
  2. `yarn buildStorybookStatic`

  ## PROD
  1. `yarn initialSetup` - needs to be run once on initial setup, or if new packages installed in future
  2. `yarn buildProd`
  (file `dist` output can be adjusted here (line 12): `./webpack.prod.js`)

## Storybook - Technical Overview In Regards to Solution
- We are using Storybook as our local FE development environment.
- Storybook is used to build HTML/JSX & does not compile the codebase CSS/JS.
- Storybook will load the precompiled CSS/JS and display the related JSX/HTML

# setup - install packages
Begin by running `yarn initialSetup` - this will install