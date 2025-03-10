<script setup lang="ts">
    const attributes = ref({ fill: 'transparent', stroke: 'transparent' })
    onMounted(async () => {
        const delay = () => {
            const r = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min)
            return r(r(0, 200), r(300, 500))
        }
        console.log(delay())
        await new Promise(resolve => setTimeout(resolve, delay()))
        attributes.value.stroke = 'white'
        await new Promise(resolve => setTimeout(resolve, delay()))
        attributes.value.fill = 'white'
        await new Promise(resolve => setTimeout(resolve, 50))
        attributes.value.fill = 'transparent'
        await new Promise(resolve => setTimeout(resolve, 50))
        attributes.value.fill = 'transparent'
        await new Promise(resolve => setTimeout(resolve, 50))
        attributes.value.fill = 'white'
        await new Promise(resolve => setTimeout(resolve, 50))
        attributes.value.fill = 'white'
    })
    
</script>
<template>
    <div class="w-fit h-fit cursor-wait" @mouseenter="() => attributes.fill = 'transparent'" @mouseleave="() => attributes.fill = 'white'"> 
        <slot name="default" :attributes />
    </div>
</template>