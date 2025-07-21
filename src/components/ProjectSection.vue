<template>
  <section class="px-6 py-12 text-center">
   

    <!-- Tabs -->
    <div class="flex justify-center gap-4 mb-10">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="px-4 py-1 rounded-full border text-sm font-medium"
        :class="activeTab === tab.key ? 'bg-pink-500 text-white' : 'border-pink-500 text-pink-400'"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Cards -->
    <div class="space-y-10 max-w-5xl mx-auto">
      <ProjectCard v-for="(project, index) in projects[activeTab]" :key="index" :data="project" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { projects } from '../data/project.js'
import ProjectCard from './ProjectCard.vue'

const tabs = [
  { label: 'Software Dev', key: 'software' },
  { label: 'IoT & Embedded', key: 'iot' },
  { label: 'Data & ML', key: 'data' },
  { label: 'Others', key: 'others' }
]

const activeTab = ref('software')
</script>
