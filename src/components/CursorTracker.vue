<script setup>
import { ref, onMounted } from 'vue'
import { trackCursor } from '../animations/CursorTracking.js' 

const circle = ref(null)
const pos = ref({ x: 0, y: 0 })

onMounted(() => {
  trackCursor(circle, pos)
})
</script>

<template>
  <div
    ref="circle"
    class="fixed top-0 left-0 w-[100px] h-[100px] rounded-full bg-white opacity-70 mix-blend-difference pointer-events-none z-50"
    :style="{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }"
  />
</template>
