<template>
  <div
    class="bg-[#fdf6f9]/50 backdrop-blur-md p-6 rounded-xl shadow border border-rose-200/60 transition
           hover:shadow-lg hover:border-rose-300 hover:bg-[#fdf6f9]/70"
  >
    <h4 class="text-lg font-semibold text-rose-900 mb-1">
      {{ data.title }}
    </h4>

    <p class="text-sm text-rose-700 mb-2">
      {{ data.org }} <span class="text-xs text-rose-400">• {{ data.date }}</span>
    </p>

    <p class="text-sm text-rose-700 mb-2">{{ data.description }}</p>

    <ul class="list-disc list-inside text-sm text-rose-600 space-y-1 mb-2">
      <li v-for="(point, idx) in data.highlights" :key="idx">{{ point }}</li>
    </ul>

    <a
      v-if="data.link"
      :href="data.link"
      target="_blank"
      class="text-xs text-rose-600 underline hover:text-rose-500"
    >
      Visit Website
    </a>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
})
</script>
