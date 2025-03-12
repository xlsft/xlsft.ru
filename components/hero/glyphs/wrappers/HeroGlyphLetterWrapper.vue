<script setup lang="ts">
    import { useMediaQuery } from '@ained/composables'
    const mobile = useMediaQuery('(min-width: 1300px)')
    const attributes = ref({ fill: 'transparent', stroke: 'transparent' })
    
    const delay = () => {
        const r = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min)
        return r(r(0, 200), r(300, 500))
    }
    const light = {
        up: async () => {
            await sleep(delay())
            attributes.value.stroke = 'white'
            await sleep(delay())
            attributes.value.fill = 'white'
            await sleep(50)
            attributes.value.fill = 'transparent'
            await sleep(50)
            attributes.value.fill = 'transparent'
            await sleep(50)
            attributes.value.fill = 'white'
            await sleep(50)
            attributes.value.fill = 'white'
        },
        down: async () => {
            await sleep(delay())
            attributes.value.fill = 'rgba(255, 255, 255, 0.1)'
            await sleep(delay())
            attributes.value.fill = 'rgba(255, 255, 255, 0.3)'
            await sleep(50)
            attributes.value.fill = 'rgba(255, 255, 255, 0.1)'
            await sleep(100)
            attributes.value.fill = 'transparent'
            await sleep(50)
        }
    }
    onMounted(light.up)
    
</script>
<template>
    <div class="w-fit h-fit cursor-wait" @mouseenter="light.down" @mouseleave="light.up" :class="mobile ? 'scale-[.4] first:-mb-[32%] last:-mt-[32%] not-first:not-last:-my-[32%]' : ''"> 
        <slot name="default" :attributes />
    </div>
</template>