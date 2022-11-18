import type { PluginFunction } from '@vuepress/core'

export let subpageDirectoryPlugin = (): PluginFunction => () => ({
  name: 'vuepress-plugin-subpage-directory',
  onPrepared(app) {
    let links = new Array<string>()
    app.pages.forEach((page) => {
      links.push(page.path)
    })
    console.log('Outputting all links')
    console.log(links)
  },
})
