<script setup>
const props = defineProps(["buttonRoute"]);
</script>

<template>
  <RouterLink
    :to="props.buttonRoute.path"
    class="sm:font-semibold border-2 border-black px-5 py-1 sm:px-10 sm:py-2"
  >
    {{ props.buttonRoute.title }}</RouterLink
  >
</template>
