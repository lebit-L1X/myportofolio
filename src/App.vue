<template>
  <main class="ml-20 relative">
    <CursorTracker/>
    <Sidebar />
    <section id="home"><Home /></section>
    <section id="about"><AboutMe /></section>
    <section id="experience"><Experiences /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
  </main>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import CursorTracker from './components/CursorTracker.vue'
import Home from './sections/Home.vue'
import AboutMe from './sections/AboutMe.vue'
import Experiences from './sections/Experiences.vue'
import Projects from './sections/Projects.vue'
import Contact from './sections/Contact.vue'
</script>
