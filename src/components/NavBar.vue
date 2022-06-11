<script setup>
const props = defineProps(["mainNav", "userNav"]);
</script>

<template>
  <nav class="bg-slate-100 py-4 px-4 lg:px-32 xl:px-48">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <RouterLink to="/" class="flex items-center">
        <img src="@/assets/logo.svg" alt="Logo" class="h-8 md:h-12" />
      </RouterLink>
      <div class="hidden md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col md:flex-row md:font-semibold">
          <li
            v-for="item in props.mainNav"
            :key="item.title"
            class="block py-2 px-3 text-xs"
          >
            <RouterLink :to="item.path">{{ item.title }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="hidden lg:block md:w-auto">
        <ul class="flex flex-col lg:flex-row md:font-semibold">
          <li
            v-for="item in props.userNav"
            :key="item.title"
            class="block py-2 px-3 text-xs"
          >
            <RouterLink :to="item.path">{{ item.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
