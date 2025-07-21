<template>
  <div
    class="bg-[#fdf6f9]/50 backdrop-blur-md rounded-xl shadow border border-rose-200/60 w-full max-w-4xl mx-auto transition
           hover:shadow-lg hover:border-rose-300 hover:bg-[#fdf6f9]/70 overflow-hidden"
  >
    <div class="md:flex">

      <div class="md:w-1/2 p-4 flex items-center justify-center bg-white/70">
        <img
          :src="data.image"
          alt="project screenshot"
          class="rounded shadow max-h-72 object-contain"
        />
      </div>


      <div class="md:w-1/2 p-6 text-left text-rose-900">
        <h3 class="text-2xl font-bold text-rose-900 mb-2">{{ data.title }}</h3>
        <p class="text-sm text-rose-700 mb-4">
          {{ data.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="(tech, i) in data.stack"
            :key="i"
            class="px-3 py-1 text-sm text-rose-900 bg-rose-100/50 border border-rose-200 rounded-md hover:bg-rose-100 transition"
          >
            {{ tech }}
          </span>
        </div>

        <div class="text-sm text-rose-800 flex gap-6">
          <a
            v-if="data.githubFE"
            :href="data.githubFE"
            target="_blank"
            class="hover:text-rose-500 transition"
          >
            GitHub FE 🔗
          </a>
          <a
            v-if="data.githubBE"
            :href="data.githubBE"
            target="_blank"
            class="hover:text-rose-500 transition"
          >
            GitHub BE 🔗
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
})
</script>
