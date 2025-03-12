<script setup lang="ts">
    const props = defineProps<{ title: string, id: string }>()
</script>

<template>
    <div class="w-dvw h-fit p-[48px] flex items-center justify-center bg-cobalt-100" :id>
        <div class="w-full max-w-[1300px] flex flex-col gap-[48px]">
            <span data-mono class="text-3xl opacity-50">// {{ title }}</span>
            <slot/>
        </div>
    </div>
</template>