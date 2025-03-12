<script setup lang="ts">
    import { useTweened, easing, useDebouncer, useMediaQuery } from '@ained/composables';
    const mobile = useMediaQuery('(min-width: 1300px)')
    const size = useTweened(0, { duration: 4000, easing: easing.quartInOut })
    const rotate = useTweened(0, { duration: 1000, easing: easing.quartInOut })
    onMounted(async () => {
        await sleep(2000)
        rotate.target.value = 1000
        size.target.value = document.body.clientWidth - 48 * 4
        addEventListener('resize', () => size.target.value = (!mobile.value ?  document.body.clientWidth - (48 * 4) : document.body.clientWidth + (48 * 4)))
    })

</script>
<template>
    <div class="origin-center transition-none! *:transition-none!">
        <svg
            viewBox="0 0 1570 1570"
            fill="none"
            :style="`width: ${size.current.value}px; height: ${size.current.value}px; transform: rotate(${rotate.current.value}deg);`"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M0 785H1570M785 1570L785 0M229.921 229.921L1340.08 1340.08M229.921 1340.08L1340.08 229.921M26.7482 581.827L1543.25 988.173M581.827 1543.25L988.173 26.7482M392.5 105.17L1177.5 1464.83M105.17 1177.5L1464.83 392.5M105.17 392.5L1464.83 1177.5M392.5 1464.83L1177.5 105.17M581.827 26.7482L988.173 1543.25M26.7482 988.173L1543.25 581.827M6.71571 682.537L1563.28 887.463M682.537 1563.28L887.463 6.71572M307.122 162.218L1262.88 1407.78M162.218 1262.88L1407.78 307.122M59.7545 484.593L1510.25 1085.41M484.593 1510.25L1085.41 59.7545M484.593 59.7545L1085.41 1510.25M59.7546 1085.41L1510.25 484.593M162.218 307.122L1407.78 1262.88M307.122 1407.78L1262.88 162.217M682.537 6.71573L887.463 1563.28M6.71571 887.463L1563.28 682.537M1.91242 839.759L1568.09 730.241M839.759 1568.09L730.241 1.91221M192.553 269.994L1377.45 1300.01M269.994 1377.45L1300.01 192.553M14.4229 635.215L1555.58 934.785M635.215 1555.58L934.785 14.4227M346.034 134.205L1223.97 1435.79M134.206 1223.97L1435.79 346.034M79.447 440.879L1490.55 1129.12M440.879 1490.55L1129.12 79.4465M529.429 42.7679L1040.57 1527.23M42.7681 1040.57L1527.23 529.429M1.4643 737.077L1568.54 832.923M737.077 1568.54L832.923 1.46411M264.843 197.07L1305.16 1372.93M197.07 1305.16L1372.93 264.843M40.5661 535.916L1529.43 1034.08M535.916 1529.43L1034.08 40.5659M434.735 82.4764L1135.27 1487.52M82.4768 1135.27L1487.52 434.735M130.4 351.729L1439.6 1218.27M351.73 1439.6L1218.27 130.399M628.496 15.759L941.504 1554.24M15.7592 941.504L1554.24 628.496"
            stroke="url(#paint0_radial_493_68)"
            />
            <defs>
            <radialGradient
                id="paint0_radial_493_68"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(785 785) rotate(90) scale(785)"
            >
                <stop offset="0.17" stop-color="#07090D" stop-opacity="0" />
                <stop offset="0.785" stop-color="#9FAECB" />
            </radialGradient>
            </defs>
        </svg>
    </div>
</template>

<style scoped> 
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    div {
        transform-origin: center;
        animation: rotate 60s linear infinite;
        pointer-events: none;
    }
</style>
