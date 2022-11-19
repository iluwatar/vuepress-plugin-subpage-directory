import { defineComponent } from 'vue'
import { useSiteData } from '@vuepress/client'
import { usePageData } from '@vuepress/client'

export default defineComponent({
    name: 'SubpageDirectory',
    data() {
        const siteData = useSiteData()
        console.log(siteData)
        const pageData = usePageData()
        console.log(pageData.value.path)
        return {
            items: [
                {
                    title: 'Child 1',
                    path: '/child-1',
                },
                {
                    title: 'Child 2',
                    path: '/child-2',
                },
            ],
        }
    },
})
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.title">
            <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
    </ul>
</template>
