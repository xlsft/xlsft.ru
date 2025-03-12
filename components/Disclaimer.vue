<script setup lang="ts">
    import Logo from './hero/glyphs/Logo.vue';
    import { useMediaQuery } from "@ained/composables";
    const mobile = useMediaQuery('(min-width: 1300px)')

    const visible = ref(true)

    onMounted(() => {
        setTimeout(() => {
            visible.value = false
        }, 3000)
    })

    const data = ref<string[]>([])
    onMounted(async () => {
        data.value.push('|')
        data.value.push('-')
        data.value.push('|')
        for (let i = 0; i < 48; i++) {
            await sleep(100)
            data.value.splice(i + 1, 0, '-')
        }
    })
</script>

<template>
    <div class="absolute w-dvw h-dvh top-0 left-0 bg-cobalt-50 flex items-center justify-center z-[99999999999999999999] duration-1000" :class="visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'">
        <Logo/>
        
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-[32px]">
            <path d="M4.00026 37.3164C2.87166 31.3725 3.66389 25.2237 6.26227 19.7599C8.86064 14.2962 13.1303 9.80113 18.4533 6.92537C23.7763 4.04961 29.8763 2.94241 35.8703 3.76402C41.8644 4.58564 47.4415 7.29344 51.7943 11.4955C56.1471 15.6975 59.0497 21.1757 60.0821 27.1371C61.1144 33.0985 60.2228 39.2337 57.5364 44.6547C54.85 50.0757 50.5082 54.5011 45.1394 57.2904C39.7706 60.0797 33.6535 61.0881 27.6735 60.1697" stroke="white" stroke-width="7"/>
        </svg>

        <span v-if="mobile" data-mono class="text-xs bottom-[48px] left-1/2 -translate-x-1/2 absolute">Use desktop for the best experience</span>

    </div>
</template>