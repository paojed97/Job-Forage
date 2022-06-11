<script setup>
import JobCard from "../components/JobCard.vue";
import SearchFilter from "../components/SearchFilter.vue";
import FilterPanel from "../components/FilterPanel.vue";
</script>

<template>
  <section
    class="bg-slate-100 px-4 sm:px-6 md:py-4 lg:py-5 lg:px-32 xl:px-48 xl:py-7"
  >
    <SearchFilter class="hidden md:block" />
  </section>

  <main
    class="px-4 py-4 sm:px-6 md:pb-4 md:pt-6 lg:pb-5 lg:pt-7 lg:px-32 xl:px-48 xl:pb-7 xl:pt-9"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <h2 class="text-xl tracking-tight font-bold sm:text-2xl md:text-3xl">
        Jobs Found
      </h2>
      <button
        class="border-2 border-black px-3 py-1 text-sm sm:font-semibold sm:px-6 md:hidden"
      >
        Filter
      </button>
    </div>
    <div
      class="my-6 container flex flex-wrap items-center justify-between mx-auto"
    >
      <div class="md:grid gap-2 md:grid-cols-12">
        <div class="hidden my-4 md:block md:col-span-4">
          <FilterPanel />
        </div>
        <div class="md:col-span-8">
          <JobCard class="my-4" />
          <JobCard class="my-4" />
          <JobCard class="my-4" />
          <JobCard class="my-4" />
          <JobCard class="my-4" />
          <JobCard class="my-4" />
          <JobCard class="my-4" />
        </div>
      </div>
    </div>
  </main>
</template>
