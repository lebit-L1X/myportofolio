<template>
  <div class="bg-[#13151a] text-white rounded-lg p-5 border border-pink-500/20 shadow hover:shadow-pink-400/20 transition">
    <h4 class="text-lg font-semibold text-pink-400 mb-1">
      {{ data.title }}
    </h4>
    <p class="text-sm text-pink-300 mb-2">
      {{ data.org }} <span class="text-xs text-slate-400">• {{ data.date }}</span>
    </p>
    <p class="text-sm text-slate-300 mb-2">{{ data.description }}</p>
    <ul class="list-disc list-inside text-sm text-slate-400 space-y-1 mb-2">
      <li v-for="(point, idx) in data.highlights" :key="idx">{{ point }}</li>
    </ul>
    <a
      v-if="data.link"
      :href="data.link"
      target="_blank"
      class="text-xs text-pink-400 underline hover:text-pink-300"
    >
      Visit Website
    </a>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>
