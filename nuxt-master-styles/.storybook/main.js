const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {
    // extend config here
    return config
  },
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|ts)",
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(js|ts)"
  ],
  addons: [
    // Add your addons here
  ]
})
