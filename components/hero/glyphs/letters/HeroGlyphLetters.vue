<script setup lang="ts">
    
    import HeroGlyphLetterOne from '~/components/hero/glyphs/letters/HeroGlyphLetterOne.vue'
    import HeroGlyphLetterTwo from '~/components/hero/glyphs/letters/HeroGlyphLetterTwo.vue'
    import HeroGlyphLetterThree from '~/components/hero/glyphs/letters/HeroGlyphLetterThree.vue'
    import HeroGlyphLetterFour from '~/components/hero/glyphs/letters/HeroGlyphLetterFour.vue'
    import HeroGlyphLetterFive from '~/components/hero/glyphs/letters/HeroGlyphLetterFive.vue'
    import HeroGlyphLetterSix from '~/components/hero/glyphs/letters/HeroGlyphLetterSix.vue'
    import { useMediaQuery } from '@ained/composables'
    const mobile = useMediaQuery('(min-width: 1300px)')
</script>

<template>
    <div class="absolute-center flex gap-[24px]" :class="mobile ? 'flex-col' : 'flex-row'">
        <HeroGlyphLetterOne/>
        <HeroGlyphLetterTwo/>
        <HeroGlyphLetterThree/>
        <HeroGlyphLetterFour/>
        <HeroGlyphLetterFive/>
        <HeroGlyphLetterSix/>
    </div>
</template>