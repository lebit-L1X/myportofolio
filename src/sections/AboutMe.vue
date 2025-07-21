<script setup>
import TechStackSection from "../components/TechStack.vue";
</script>

<template>
  <main class="text-rose-900 min-h-screen bg-site">
    <!-- ABOUT ME -->
    <section class="py-20 px-6 border-t border-white/30">
      <div class="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 class="text-5xl font-bold mb-6">About Me</h2>
        <div class="max-w-2xl text-left text-base leading-relaxed">
          <p>
            As a <strong>Computer Engineering undergraduate</strong>, I’ve
            explored a wide range of topics, including
            <strong>full-stack web development</strong>,
            <strong>software engineering</strong>,
            <strong>computer architecture</strong>,
            <strong>machine learning</strong>, <strong>IoT</strong>, and
            <strong>cybersecurity</strong>.
          </p>
          <br />
          <p>
            During my internship, I gained hands-on experience as a
            <strong>QA Engineer</strong>, collaborating with
            <strong>international developers</strong>,
            <strong>senior QA engineers</strong>, and
            <strong>product managers</strong> to ensure the quality of fintech
            solutions.
          </p>
          <br />
          <p>
            I’m currently deepening my expertise in
            <strong>software development</strong>, with a focus on
            <strong>object-oriented programming (OOP)</strong> and exploring
            <strong>Domain-Driven Design (DDD)</strong> to write cleaner, more
            scalable code.
          </p>
        </div>
      </div>
    </section>

    <section class="py-6 px-6 border-t border-white/30">
      <div class="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h3 class="text-3xl font-bold mb-3">Skills</h3>
        <p class="text-base max-w-2xl">
          A curation of the skills, frameworks, and tools I’ve learned and
          continue to build upon.
        </p>
      </div>
    </section>

    <div class="max-w-6xl mx-auto">
      <TechStackSection />
    </div>

    <section class="px-6 py-6 border-t border-white/30">
      <div class="max-w-5xl mx-auto flex flex-col items-center text-center">
        <p class="text-base max-w-2xl">
          Interested in my qualifications and experience? Download my complete
          CV below.
        </p>
      </div>
      <div class="max-w-5xl py-6 mx-auto flex justify-center">
        <a
          href="/wendy_cv.pdf"
          download
          class="inline-block px-6 py-3 bg-rose-300 text-black rounded hover:bg-rose-400 transition font-semibold text-sm shadow"
        >
          Download My CV
        </a>
      </div>
    </section>
  </main>
</template>
