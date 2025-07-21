<template>
  <aside class="fixed top-0 left-0 h-screen w-20 bg-[#0e0e19] flex flex-col items-center py-6 z-50 text-white space-y-6">
    <!-- Name or Logo -->
    <div class="text-xs font-bold tracking-wider rotate-90 whitespace-nowrap">
      Wendy
    </div>

    <!-- Navigation Links -->
    <nav class="flex flex-col gap-6 mt-10">
      <a href="#home" class="hover:text-pink-400" title="Home">
        <i class="las la-home text-2xl"></i>
      </a>
      <a href="#about" class="hover:text-pink-400" title="About">
        <i class="las la-user text-2xl"></i>
      </a>
      <a href="#experience" class="hover:text-pink-400" title="Experience">
        <i class="las la-briefcase text-2xl"></i>
      </a>
      <a href="#projects" class="hover:text-pink-400" title="Projects">
        <i class="las la-code text-2xl"></i>
      </a>
      <a href="#contact" class="hover:text-pink-400" title="Contact">
        <i class="las la-envelope text-2xl"></i>
      </a>
    </nav>

    <!-- Socials -->
    <div class="mt-auto flex flex-col gap-4">
      <a href="https://github.com/wendyars" target="_blank" class="hover:text-pink-400">
        <i class="lab la-github text-2xl"></i>
      </a>
      <a href="https://linkedin.com/in/wendyars" target="_blank" class="hover:text-pink-400">
        <i class="lab la-linkedin-in text-2xl"></i>
      </a>
      <a href="mailto:wendyars@gmail.com" class="hover:text-pink-400">
        <i class="las la-envelope text-2xl"></i>
      </a>
    </div>
  </aside>
</template>

<script setup>
// No logic required
</script>
