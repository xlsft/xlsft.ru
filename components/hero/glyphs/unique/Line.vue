<script setup lang="ts">
    const data = ref<string[]>([])
    onMounted(async () => {
        data.value.push('---')
        data.value.push('|')
        data.value.push('---')
        const cycle = async () => {
            for (let i = 0; i < 24; i++) {
                await sleep(100)
                data.value.splice(i + 1, 0, '|')
            }
            
            await sleep(1000)
            for (let i = 0; i < 24; i++) {
                await sleep(100)
                data.value.splice(data.value.length - 2, 1)
            }
            data.value.push('---')
            data.value.pop()
        }
        setInterval(cycle, 12000); cycle()
    })
</script>

<template>
    <div class="absolute top-[48px] left-[48px] flex flex-col items-center" data-mono>
        <span v-for="n in data">{{ n }}</span>
    </div>
</template>

<style scoped>
    span {
        font-size: 10px;
        margin-bottom: -5px;
    }
</style>