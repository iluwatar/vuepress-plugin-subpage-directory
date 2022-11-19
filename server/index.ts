import type { App, PluginFunction } from '@vuepress/core'

let prepareLinks = async (app: App): Promise<void> => {
  let links = app.pages.map((page) => {
    console.log(page.path)
    return page.path
  })

  await app.writeTemp(
    'subpageDirectory/data.js',
    `export let links = ${JSON.stringify(links)}`,
  )  
}

export let subpageDirectoryPlugin = (): PluginFunction => () => ({
  name: 'vuepress-plugin-subpage-directory',
  onPrepared: async app => {
    await prepareLinks(app)
  },
})
