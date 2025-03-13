<script setup lang="ts">
    const writing = ref({ title: false, subtitle: false })
    const string = ref({ title: 'Software consists of computer programs that instruct the execution of a computer.[1] Software also includes design documents and specifications.', subtitle: 'The history of software is closely tied to the development of digital  computers in the mid-20th century. Early programs were written in the machine language specific to the hardware. The introduction of high-level programming languages in 1958 allowed for more human-readable instructions, making software development easier and more portable across different computer architectures. Software in a programming language is run through a compiler or interpreter to execute on the architecture\'s hardware.' })
    const data = ref<Record<string, string[]>>({ title: [], subtitle: [] })
    const delay = () => {
        const r = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1) + min)
        return r(r(0, 25), r(50, 200))
    }
    onMounted(async () => {
        writing.value.title = true
        for (let i = 0; i < string.value.title.length; i++) {
            const letter = string.value.title[i];
            await sleep(delay())
            data.value.title.push(letter)
        }
        writing.value.title = false
    })
    onMounted(async () => {
        writing.value.subtitle = true
        for (let i = 0; i < string.value.subtitle.length; i++) {
            const letter = string.value.subtitle[i];
            await sleep(delay())
            data.value.subtitle.push(letter)
        }
        writing.value.subtitle = false
    })
</script>

<template>
    <div class="flex flex-col gap-[16px] absolute bottom-[48px] left-1/2 -translate-x-1/2 items-center">
        <span   class="text-[10px] w-[calc(100dvw-48px-48px-48px-48px)] max-w-[1000px] flex items-center justify-center text-center flex-wrap"><span v-for="letter in data.title">{{ letter === ' ' ? '&nbsp;' : letter }}</span> <span v-if="writing.title" class="h-[14px] w-[10px] bg-white pulse ml-[4px]"></span></span>
        <span   class="text-[10px] w-[calc(100dvw-48px-48px-48px-48px)] max-w-[1000px] flex items-center justify-center text-center flex-wrap opacity-50"><span v-for="letter in data.subtitle">{{ letter === ' ' ? '&nbsp;' : letter }}</span> <span v-if="writing.subtitle" class="h-[14px] w-[10px] bg-white pulse ml-[4px]"></span></span>
    </div>
</template>

<style scoped>
    .pulse {
        animation: pulse 1s infinite;
    }
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>