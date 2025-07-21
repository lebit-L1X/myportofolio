<template>
  <div class="bg-[#0e0e1b] rounded-xl overflow-hidden shadow-lg border border-slate-700 max-w-4xl mx-auto">
    <div class="md:flex">
      <div class="md:w-1/2 bg-white p-4 flex items-center justify-center">
        <img :src="data.image" alt="project screenshot" class="rounded shadow max-h-72 object-contain" />
      </div>
      <div class="md:w-1/2 p-6 text-left text-slate-100">
        <h3 class="text-2xl font-bold text-purple-400 mb-2">{{ data.title }}</h3>
        <p class="text-sm text-slate-300 mb-4">
          {{ data.description }}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="(tech, i) in data.stack"
            :key="i"
            class="bg-slate-800 text-xs px-3 py-1 rounded-full text-purple-200 border border-purple-600"
          >
            {{ tech }}
          </span>
        </div>
        <div class="text-sm text-slate-300 flex gap-6">
          <a v-if="data.githubFE" :href="data.githubFE" target="_blank" class="hover:text-pink-400">GitHub FE 🔗</a>
          <a v-if="data.githubBE" :href="data.githubBE" target="_blank" class="hover:text-pink-400">GitHub BE 🔗</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object
})
</script>