<script setup lang="ts">
    const current = ref()
    const visible = ref(false)
    const delay = () => {
        const r = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min)
        return r(r(200, 500), r(700, 3000))
    }
    onMounted(async () => {
        await sleep(300)
        visible.value = true
        current.value = Math.random() < .5 ? 0 : 2
        setInterval(async () => {
            await sleep(delay())
            if (current.value === 0) {
                current.value = Math.random() < .5 ? 1 : 2
            } else if (current.value === 1) {
                current.value = Math.random() < .5 ? 0 : 2
            } else if (current.value === 2) {
                current.value = Math.random() < .5 ? 0 : 1
            }
        }, 100)
    })
</script>

<template>
  <svg
    :class="visible ? 'opacity-100' : 'opacity-0'"
    width="16"
    class="absolute right-[48px] bottom-[48px] *:transition-all cursor-context-menu"
    height="93"
    viewBox="0 0 16 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="92.1666"
      width="27.6667"
      height="15"
      rx="7.5"
      transform="rotate(-90 0.5 92.1666)"
      stroke="white"
      :fill="current === 0 ? 'white' : 'none'"
    />
    <rect
      x="0.5"
      y="60.1666"
      width="27.6667"
      height="15"
      rx="7.5"
      transform="rotate(-90 0.5 60.1666)"
      stroke="white"
      :fill="current === 1 ? 'white' : 'none'"
    />
    <rect
      x="0.5"
      y="28.1666"
      width="27.6667"
      height="15"
      rx="7.5"
      transform="rotate(-90 0.5 28.1666)"
      stroke="white"
      :fill="current === 2 ? 'white' : 'none'"
    />
    <path d="M8 38.6666L8 22" stroke="white" />
    <path d="M8 70.6666L8 54" stroke="white" />
  </svg>
</template>
