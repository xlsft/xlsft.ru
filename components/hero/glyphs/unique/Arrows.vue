<script setup lang="ts">
    const router = useRouter()
    const visible = ref(false)
    const current = ref(1)
    const anchor = useAnchors()
    onMounted(async () => {
        await sleep(500)
        visible.value = true
        setInterval(() => {
            current.value = (current.value + 1) % 4
        }, 1000)
    })
</script>
<template>
    <svg
        class="absolute bottom-[48px] left-[48px] cursor-s-resize"
        :class="visible ? 'opacity-100' : 'opacity-0'"
        @click="anchor.push('about')"
        width="32"
        viewBox="0 0 22 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        d="M1 1L10.2929 10.2929C10.6834 10.6834 11.3166 10.6834 11.7071 10.2929L21 1"
        :stroke="current === 0 ? 'white' : 'rgba(255, 255, 255, 0.2)'"
        />
        <path
        d="M1 11L10.2929 20.2929C10.6834 20.6834 11.3166 20.6834 11.7071 20.2929L21 11"
        :stroke="current === 1 ? 'white' : 'rgba(255, 255, 255, 0.2)'"
        />
        <path
        d="M1 21L10.2929 30.2929C10.6834 30.6834 11.3166 30.6834 11.7071 30.2929L21 21"
        :stroke="current === 2 ? 'white' : 'rgba(255, 255, 255, 0.2)'"
        />
        <path
        d="M1 31L10.2929 40.2929C10.6834 40.6834 11.3166 40.6834 11.7071 40.2929L21 31"
        :stroke="current === 3 ? 'white' : 'rgba(255, 255, 255, 0.2)'"
        />
    </svg>
</template>
