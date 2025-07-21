<script setup>
import { ref } from "vue";
import { HeroAnimation } from "../animations/HeroAnimations";

const yellowBlob = ref(null);
const greenBlob = ref(null);
const whiteBlob = ref(null);
const coralBlob = ref(null);
const blueBlob = ref(null);
const lilacBlob = ref(null);

HeroAnimation(yellowBlob, greenBlob, whiteBlob, coralBlob, blueBlob, lilacBlob);
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-start bg-site overflow-hidden px-6 py-20"
  >
    <!-- Text Content -->
    <div class="z-10 max-w-2xl space-y-6">
      <h1 class="text-5xl font-bold leading-tight text-gray-900">
        Hi, I’m <span class="text-primary">Wendy / L1X</span><br />
        <span class="font-bold text-rose-900 text-2xl mt-2 inline-block">
          Welcome to my Portfolio.
        </span>
      </h1>
<div class="max-w-2xl mx-auto">
  <p class="text-rose-700 text-lg leading-relaxed text-justify">
    Final-year Computer Engineering undergrad passionate about software engineering, embedded systems, and machine learning. Eager to learn, quick to adapt, and driven to build meaningful tech.
  </p>
</div>


      <a
        href="#contact"
        class="inline-block px-6 py-3 border border-rose-400 text-rose-400 rounded hover:bg-rose-400 hover:text-black transition font-semibold"
      >
        Contact Me
      </a>
    </div>

    <!-- Blob animation positioned to the far right -->
    <div
      class="relative w-full max-w-[400px] h-[400px] mb-10 translate-x-1/2 -translate-y-1/4 lg:mb-0"
    >
      <div
        ref="yellowBlob"
        class="w-[500px] h-[500px] bg-yellow-300 rounded-full shadow-lg relative overflow-hidden"
      >
        <div
          ref="greenBlob"
          class="absolute w-[80px] h-[80px] bg-green-300 rounded-full shadow-md opacity-90"
        />
        <div
          ref="whiteBlob"
          class="absolute w-[60px] h-[60px] bg-white rounded-full shadow-md opacity-80"
        />
        <div
          ref="coralBlob"
          class="absolute w-[70px] h-[70px] bg-pink-300 rounded-full shadow opacity-90"
        />
        <div
          ref="blueBlob"
          class="absolute w-[65px] h-[65px] bg-blue-200 rounded-full shadow opacity-90"
        />
        <div
          ref="lilacBlob"
          class="absolute w-[60px] h-[60px] bg-purple-200 rounded-full shadow opacity-90"
        />
      </div>
    </div>
  </section>
</template>
