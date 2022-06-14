<script setup>
import SearchFilter from "../components/SearchFilter.vue";
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
      <h2
        class="text-xl tracking-tight font-bold sm:text-2xl md:text-3xl lg:my-10"
      >
        Career Advice
      </h2>
      <p class="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, scelerisque
        scelerisque id amet commodo tincidunt tellus. Id congue quam massa quis
        turpis phasellus donec sit. Tincidunt dignissim quisque egestas nec non.
        Neque, gravida varius vulputate vestibulum sed. Magna quis massa et,
        mauris, leo morbi lectus. Ipsum lacus dignissim sapien amet, pretium
        egestas ullamcorper. Hendrerit sagittis, feugiat faucibus sed.
      </p>
      <p class="mt-3 text-xs">
        Sed sit vitae metus sed aliquam nam. Sed proin sed tortor sed. Risus
        ipsum massa ultrices aenean ridiculus aliquam scelerisque eget. Et nec,
        est semper aliquam quisque sapien leo et dui. Congue ultrices nulla
        blandit lorem. Accumsan, dictum viverra enim scelerisque nullam interdum
        volutpat massa curabitur.
      </p>

      <div class="my-10 w-full md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="block w-full object-cover h-72 md:col-start-1 md:col-end-3"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden h-full w-full object-cover md:block md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden w-full object-cover h-72 md:block md:col-start-1 md:col-end-3"
        />
      </div>

      <h4 class="text-md tracking-tight font-bold sm:text-lg md:text-xl">
        CV Tips
      </h4>

      <div class="my-10 w-full grid md:grid-cols-4 gap-4">
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="block w-full object-cover h-56"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="block w-full object-cover h-56"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden w-full object-cover h-56 md:block"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden w-full object-cover h-56 md:block"
        />
      </div>

      <h4 class="text-md tracking-tight font-bold sm:text-lg md:text-xl">
        Cover Letter Tips
      </h4>

      <div class="my-10 w-full grid md:grid-cols-4 gap-4">
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="block w-full object-cover h-56"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="block w-full object-cover h-56"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden w-full object-cover h-56 md:block"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden w-full object-cover h-56 md:block"
        />
      </div>

      <h4 class="text-md tracking-tight font-bold sm:text-lg md:text-xl">
        Interview Tips
      </h4>

      <div class="my-10 w-full grid md:grid-cols-4 gap-4">
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="block w-full object-cover h-56"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="block w-full object-cover h-56"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden w-full object-cover h-56 md:block"
        />
        <img
          src="@/assets/image-4.jpg"
          alt="Placeholder"
          class="hidden w-full object-cover h-56 md:block"
        />
      </div>

      <h3 class="text-lg tracking-tight font-bold sm:text-xl md:text-2xl mb-3">
        Latest Jobs on Job Forage
      </h3>

      <div class="w-full grid md:grid-cols-2 gap-6">
        <div>
          <h4
            class="mb-3 text-md tracking-tight font-bold sm:text-lg md:text-xl"
          >
            Jobs by category
          </h4>
          <img
            src="@/assets/image-4.jpg"
            alt="Placeholder"
            class="h-72 object-cover w-full"
          />
        </div>
        <div>
          <h4
            class="mb-3 text-md tracking-tight font-bold sm:text-lg md:text-xl"
          >
            Jobs by location
          </h4>
          <img
            src="@/assets/image-4.jpg"
            alt="Placeholder"
            class="h-72 object-cover w-full"
          />
        </div>
      </div>

      <h4
        class="my-10 mb-3 text-md tracking-tight font-bold sm:text-lg md:text-xl"
      >
        Popular Jobs
      </h4>
      <img
        src="@/assets/image-4.jpg"
        alt="Placeholder"
        class="h-72 object-cover w-full"
      />
    </div>
  </main>
</template>
