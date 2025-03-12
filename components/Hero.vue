<script setup lang="ts">
    import HeroGlyphLetters from '~/components/hero/glyphs/letters/HeroGlyphLetters.vue'
    import Logo from '~/components/hero/glyphs/Logo.vue'
    import Rays from '~/components/hero/glyphs/Rays.vue'
    import Description from '~/components/hero/glyphs/Description.vue'
    import Chain from './hero/glyphs/unique/Chain.vue';
    import Circles from './hero/glyphs/unique/Circles.vue';
    import Arrows from './hero/glyphs/unique/Arrows.vue';
    import Line from './hero/glyphs/unique/Line.vue';
    import { useMediaQuery } from '@ained/composables';
    const mobile = useMediaQuery('(min-width: 1300px)')
    const glyphs = [ Chain, Circles, Arrows, Line ]
</script>

<template>
    <section class="w-dvw h-dvh min-w-dvw min-h-dvh flex items-center justify-center overflow-hidden relative" id="hero">
        <Logo/>
        <HeroGlyphLetters/>
        <Rays/>
        <Description v-if="!mobile"/>
        <component :is="glyph" v-for="glyph in glyphs" v-if="!mobile"/>
        <Arrows class="left-1/2! -translate-x-1/2" v-else/>
    </section>
</template>