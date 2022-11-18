import type { PluginFunction } from '@vuepress/core'

export let subpageDirectoryPlugin = (): PluginFunction => () => ({
  name: 'vuepress-plugin-subpage-directory',
  extendsPage: page => {
    console.log(`hello ${page.path}`)
  },
})
