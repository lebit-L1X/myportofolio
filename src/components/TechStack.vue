<script setup>
import TechCard from '../components/TechCard.vue'
import {
  programmingLanguages,
  frameworks,
  toolsTechnologies
} from '../data/techStack.js'
</script>

<template>
  <section class="py-12 px-6 max-w-7xl mx-auto">
    <div class="flex flex-col lg:flex-row gap-6 items-stretch">
      <TechCard title="Programming Languages" :items="programmingLanguages" class="flex-1" />
      <TechCard title="Frameworks" :items="frameworks" class="flex-1" />
      <TechCard title="Tools & Technologies" :items="toolsTechnologies" class="flex-1" />
    </div>
  </section>
</template>
