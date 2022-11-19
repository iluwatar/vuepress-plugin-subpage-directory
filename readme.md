# vuepress-plugin-subpage-directory

VuePress 2 plugin for generating subpage index.

## Installation

```sh
npm install --save vuepress-plugin-subpage-directory
```

## VuePress 2 Config

```js

Add plugin to your VuePress config:

```js
import { subpageDirectoryPlugin } from 'vuepress-plugin-subpage-directory'

export default {
  plugins: [subpageDirectoryPlugin()],
}
```

## Usage

```vue
<script lang="ts" setup>
import { useLinks } from 'vuepress-plugin-subpage-diretory/client'
let links = useLinks()
</script>

<template>
  <div v-for="link in links">
    <RouterLink :to="link">
      <h3 v-text="link" />
    </RouterLink>
  </div>
</template>
```
