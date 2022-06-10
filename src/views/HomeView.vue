<script setup>
import RouteButton from "../components/RouteButton.vue";
import SearchFilter from "../components/SearchFilter.vue";
</script>

<template>
  <main
    class="bg-slate-100 py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-32 xl:py-28"
  >
    <div class="sm:text-center lg:text-left">
      <h1 class="text-xl tracking-tight font-bold sm:text-2xl md:text-3xl">
        <span class="block"
          >Join the next generation of jobhunters and Upload</span
        >
        <span class="block xl:inline">your Video CV now!</span>
      </h1>
      <h3
        class="mt-1 mb-5 md:font-semibold sm:mt-3 sm:mb-10 sm:text-lg md:mt-3 md:mb-10 md:text-xl lg:mx-0"
      >
        Increase your chances and let employers find you
      </h3>
      <RouteButton
        :button-route="{ title: 'Register for free', path: '/register' }"
      />
    </div>
    <SearchFilter />
  </main>
</template>
