<script setup>
import TechStackSection from '../components/TechStack.vue'
</script>

<template>
  <main class="bg-site text-white min-h-screen">
   <section class="flex flex-col items-center text-center px-6 pt-20 pb-10">
  <h2 class="text-4xl font-bold text-rose-900 mb-2">
    Skills & <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Expertise</span>
  </h2>
  <p class="text-base text-rose-700 max-w-2xl">
    Here's a quick overview of my skills: I build full-stack applications using
    <span class="font-semibold text-rose-900"> Vue.js, Node.js, and PostgreSQL</span>,
    create embedded systems with <span class="font-semibold text-rose-900">C/C++ and ESP32</span>,
    and apply <span class="font-semibold text-rose-900">Python and machine learning</span> in research.
    I’m also experienced in <span class="font-semibold text-rose-900">QA automation with Java and Selenium</span>,
    and always excited to explore new technologies.
  </p>
</section>


    <TechStackSection />  
  </main>
</template>
