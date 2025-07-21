<template>
<section class="px-6 py-12 -mt-10 text-white text-center">
  
    <div class="flex justify-center gap-4 mb-10">
      <button
        class="px-4 py-1 rounded-full border text-sm font-medium"
        :class="activeTab === 'career' ? 'bg-pink-500 text-white' : 'border-pink-500 text-pink-400'"
        @click="activeTab = 'career'"
      >
        Experience
      </button>
      <button
        class="px-4 py-1 rounded-full border text-sm font-medium"
        :class="activeTab === 'education' ? 'bg-pink-500 text-white' : 'border-pink-500 text-pink-400'"
        @click="activeTab = 'education'"
      >
        Education
      </button>
      <button
        class="px-4 py-1 rounded-full border text-sm font-medium"
        :class="activeTab === 'organization' ? 'bg-pink-500 text-white' : 'border-pink-500 text-pink-400'"
        @click="activeTab = 'organization'"
      >
        Organization
      </button>
    </div>

    <div class="relative max-w-4xl mx-auto before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-gradient-to-b from-pink-500 via-pink-400 to-transparent">
      <CareerCard
        v-for="(item, index) in displayedItems"
        :key="index"
        :data="item"
        :isLeft="index % 2 === 0"
        class="mb-10"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import CareerCard from './ExperienceCard.vue'
import {
  professionalExperience,
  educationExperience,
  organizationExperience
} from '../data/experience.js'

const activeTab = ref('career')

const displayedItems = computed(() => {
  if (activeTab.value === 'career') return professionalExperience
  if (activeTab.value === 'education') return educationExperience
  return organizationExperience
})
</script>
