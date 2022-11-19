import type { App, PluginFunction } from '@vuepress/core'

export let subpageDirectoryPlugin = (): PluginFunction => (app: App) => (
  {
    name: 'vuepress-plugin-subpage-directory',
    define: {
      __SUBPAGELINKS__: 'foo',
    },
  }
)
