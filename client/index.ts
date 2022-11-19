import { links } from '@temp/subpageDirectory/data'
import type { ComputedRef } from 'vue'
import { ref, computed } from 'vue'

export interface Link {
  path: string
}

let linksMap = ref<Link[]>(links)

export let useLinks = (): ComputedRef<Link[]> => {
  return computed(() =>
    linksMap.value
  )
}
