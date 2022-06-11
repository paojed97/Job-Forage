<script setup>
import SearchFilter from "../components/SearchFilter.vue";
import JobPanel from "../components/JobPanel.vue";
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
        Job Details
      </h2>
      <button
        class="border-2 border-black px-3 py-1 text-sm sm:font-semibold sm:px-6 md:hidden"
      >
        Show Available Jobs
      </button>
    </div>
    <div
      class="my-6 container flex flex-wrap items-center justify-between mx-auto"
    >
      <div class="md:grid gap-2 md:grid-cols-12">
        <div class="hidden md:block md:col-span-3">
          <JobPanel />
        </div>
        <div class="md:col-span-9 border-2">
          <div class="flex">
            <div class="flex flex-col justify-center p-5">
              <h5 class="mb-1 text-lg font-bold tracking-tight uppercase">
                Job Title
              </h5>
              <h6 class="mb-1 text-sm">
                Full Time/Permanent - Company/Location
              </h6>
              <p class="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                ipsam assumenda doloribus sapiente sed autem! Id veritatis
                facilis quas iste mollitia, repellendus recusandae asperiores
                doloribus enim quam esse cumque rerum.
              </p>
            </div>
            <img src="@/assets/logo.svg" alt="Logo" class="h-12 mr-5 mt-5" />
          </div>
          <div class="text-center">
            <button class="bg-slate-200 border-2 my-5 px-4 py-2 w-32">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
