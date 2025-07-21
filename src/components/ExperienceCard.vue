<template>
  <div
    class="bg-[#fdf6f9]/50 backdrop-blur-md p-6 rounded-xl shadow border border-rose-200/60 transition
           hover:shadow-lg hover:border-rose-300 hover:bg-[#fdf6f9]/70"
  >
    <h4 class="text-lg font-semibold text-rose-900 mb-1">
      {{ data.title }}
    </h4>

    <p class="text-sm text-rose-700 mb-2">
      {{ data.org }}
      <span class="text-xs text-rose-400">• {{ data.date }}</span>
    </p>

    <p class="text-sm text-rose-700 mb-2">{{ data.description }}</p>

    <ul class="list-disc list-inside text-sm text-rose-600 space-y-1 mb-2">
      <li v-for="(point, idx) in data.highlights" :key="idx">{{ point }}</li>
    </ul>


    <div v-if="data.techStack && data.techStack.length" class="flex flex-wrap gap-2 mt-2 py-4 justify-center">

      <span
        v-for="(tech, index) in data.techStack"
        :key="index"
        class="px-3 py-1 text-sm rounded-full bg-rose-100 text-rose-800 border border-rose-300"
      >
        {{ tech }}
      </span>
    </div>

   
  </div>
</template>

<script setup>
defineProps({
  data: Object,
})
</script>
