<script setup lang="ts">
import HeroGlyphLetterWrapper from "~/components/hero/glyphs/wrappers/HeroGlyphLetterWrapper.vue";
</script>

<template>
  <HeroGlyphLetterWrapper>
    <template #default="{ attributes }">
      <svg
        width="123"
        height="122"
        viewBox="0 0 123 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M119 1H51C49.067 1 47.5 2.567 47.5 4.5V7C47.5 10.3137 44.8137 13 41.5 13H7C3.68629 13 1 15.6863 1 19V36C1 39.3137 3.68629 42 7 42H57C60.3137 42 63 39.3137 63 36V34.5C63 31.1863 65.6863 28.5 69 28.5H88C91.3137 28.5 94 31.1863 94 34.5V60C94 73 71 92.5 59 92.5H7C3.68629 92.5 1 95.1863 1 98.5V115C1 118.314 3.68629 121 7 121H75.7677C77.2077 121 78.5996 120.482 79.6894 119.541L119.922 84.7949C121.241 83.6551 122 81.9977 122 80.2539V80V4C122 2.34315 120.657 1 119 1Z"
            v-bind="attributes"
        />
      </svg>
    </template>
  </HeroGlyphLetterWrapper>
</template>
