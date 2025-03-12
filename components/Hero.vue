<script setup lang="ts">
    import HeroGlyphLetters from '~/components/hero/glyphs/letters/HeroGlyphLetters.vue'
    import Logo from '~/components/hero/glyphs/Logo.vue'
    import Rays from '~/components/hero/glyphs/Rays.vue'
    import Description from '~/components/hero/glyphs/Description.vue'
    import Chain from './hero/glyphs/unique/Chain.vue';
    import Circles from './hero/glyphs/unique/Circles.vue';
    import Arrows from './hero/glyphs/unique/Arrows.vue';
    import Line from './hero/glyphs/unique/Line.vue';

    const glyphs = [ Chain, Circles, Arrows, Line ]
</script>

<template>
    <section class="w-full h-full relative flex items-center justify-center overflow-hidden" id="hero">
        <Logo/>
        <HeroGlyphLetters/>
        <Rays/>
        <Description/>
        <component :is="glyph" v-for="glyph in glyphs"/>
    </section>
</template>