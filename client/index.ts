import { links } from '@temp/subpageDirectory/data'
import type { ComputedRef } from 'vue'
import { ref, computed } from 'vue'

export interface SubpageLink {
  path: string
}

let linksMap = ref<SubpageLink[]>(links)

export let useLinks = (): ComputedRef<SubpageLink[]> => {
  return computed(() =>
    linksMap.value
  )
}
