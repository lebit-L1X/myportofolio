<script setup>
import { ref } from "vue"
import { HeroAnimation } from "../animations/HeroAnimations"

const yellowBlob = ref(null)
const greenBlob = ref(null)
const whiteBlob = ref(null)
const coralBlob = ref(null)
const blueBlob = ref(null)
const lilacBlob = ref(null)

HeroAnimation(yellowBlob, greenBlob, whiteBlob, coralBlob, blueBlob, lilacBlob)
</script>

<template>
  <section
    class="relative min-h-screen flex items-center bg-site overflow-hidden"
  >
    <div class="z-10 max-w-2xl p-10 space-y-6">
      <h1 class="text-5xl font-bold leading-tight text-gray-900">
        Hi, I’m <span class="text-primary">Wendy / L1X</span><br />
        <span class="font-bold text-rose-900 text-2xl mt-2 inline-block">
          Welcome to my Portofolio.
        </span>
      </h1>


      <p class=" text-rose-700 text-lg leading-relaxed">
        I am Final-year Computer Engineering undergraduate with a keen interest in Software Engineering. Through my internship at OpenWay, I gained hands-on QA Engineering experience in the fintech sector, collaborating with international teams.
        <br /><br />
        I’m actively developing my software development skills through self-driven projects, supported by a solid academic foundation. My interests also include Machine Learning, IoT, and Embedded Systems.  I'm eager to learn, quick to adapt, and passionate about building reliable, impactful technology.
        <br /><br />
        I acknowledge that this website is still rough around the edges and am actively developing it, cheers!.
      </p>

    </div>

    <div class="absolute right-[0px] top-1/2 transform -translate-y-1/2">
      <div
        ref="yellowBlob"
        class="w-[500px] h-[500px] bg-yellow-300 rounded-full shadow-lg relative overflow-hidden"
      >
        <div ref="greenBlob" class="absolute w-[80px] h-[80px] bg-green-300 rounded-full shadow-md opacity-90" />
        <div ref="whiteBlob" class="absolute w-[60px] h-[60px] bg-white rounded-full shadow-md opacity-80" />
        <div ref="coralBlob" class="absolute w-[70px] h-[70px] bg-pink-300 rounded-full shadow opacity-90" />
        <div ref="blueBlob" class="absolute w-[65px] h-[65px] bg-blue-200 rounded-full shadow opacity-90" />
        <div ref="lilacBlob" class="absolute w-[60px] h-[60px] bg-purple-200 rounded-full shadow opacity-90" />
      </div>
    </div>
  </section>
</template>
