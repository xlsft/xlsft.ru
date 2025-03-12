<script setup lang="ts">
    const visible = ref(false);
    onMounted(async () => {
        await sleep(800);
        visible.value = true;
    });
</script>
<template>
    <svg
        width="73"
        height="45"
        class="absolute top-[48px] right-[48px] group cursor-not-allowed"
        :class="visible ? 'opacity-100' : 'opacity-0'"
        viewBox="0 0 73 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="22.5" cy="22.5" r="22" class="fill-white stroke-transparent group-hover:stroke-white group-hover:fill-transparent" />
        <circle cx="50.5" cy="22.5" r="22" class="stroke-white fill-transparent group-hover:fill-white group-hover:stroke-transparent" />
    </svg>
</template>
