import type { PluginFunction } from '@vuepress/core'

export let subpageDirectoryPlugin = (): PluginFunction => () => ({
  name: 'vuepress-plugin-subpage-directory',
  onPrepared(app) {
    console.log(JSON.stringify(app.pages, null, 2))
  },
})
