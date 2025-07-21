<template>
  <div
    class="bg-[#fdf6f9]/50 backdrop-blur-md p-6 rounded-xl shadow border border-rose-200/60 w-full max-w-md transition
           hover:shadow-lg hover:border-rose-300 hover:bg-[#fdf6f9]/70"
  >
    <h3 class="text-xl font-bold text-rose-900 mb-1">{{ title }}</h3>
    <p class="text-sm text-rose-700 mb-4">{{ description }}</p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="px-3 py-1 text-sm text-rose-900 bg-rose-100/50 border border-rose-200 rounded-md hover:bg-rose-100 transition"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  items: Array
})
</script>
