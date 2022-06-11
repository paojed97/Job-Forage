<script setup>
import RouteButton from "../components/RouteButton.vue";
import SearchFilter from "../components/SearchFilter.vue";
</script>

<template>
  <main
    class="bg-slate-100 py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-32 xl:px-48 xl:py-28"
  >
    <div class="sm:text-center lg:text-left">
      <h1 class="text-xl tracking-tight font-bold sm:text-2xl md:text-3xl">
        <span class="block"
          >Join the next generation of jobhunters and Upload</span
        >
        <span class="block xl:inline">your Video CV now!</span>
      </h1>
      <h3 class="mt-1 md:font-semibold sm:mt-3 sm:text-lg md:mt-3 md:text-xl">
        Increase your chances and let employers find you
      </h3>
      <div class="mt-5 sm:mt-10 md:mt-10">
        <RouteButton
          :button-route="{ title: 'Register for free', path: '/register' }"
        />
      </div>
    </div>
    <SearchFilter />
  </main>

  <section
    class="py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-32 xl:px-48 xl:py-28"
  >
    <div class="mx-auto text-center lg:text-left lg:grid lg:grid-cols-3">
      <div class="lg:col-span-2">
        <h2 class="text-xl tracking-tight font-bold sm:text-2xl md:text-3xl">
          Register your CV
        </h2>
        <p class="text-sm mt-3">
          Sed malesuada at consectetur morbi leo rhoncus. Suspendisse nunc, eget
          pharetra bibendum. Tincidunt pulvinar urna augue dictum neque, a
          vestibulum. Sed enim dictumst proin laoreet. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Beatae odio officia eum ad nostrum
          hic? Nostrum cupiditate ducimus veritatis expedita ab necessitatibus
          ut quod! Nemo corrupti iste placeat sequi velit.
        </p>
      </div>
      <div class="mt-5 sm:mt-10 lg:mt-0 self-center justify-self-end">
        <RouteButton :button-route="{ title: 'Register', path: '/register' }" />
      </div>
    </div>
  </section>

  <section
    class="bg-slate-100 py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-32 xl:px-48 xl:py-28"
  >
    <div class="mx-auto text-center lg:text-left lg:grid lg:grid-cols-3">
      <div class="lg:col-span-2">
        <h2 class="text-xl tracking-tight font-bold sm:text-2xl md:text-3xl">
          How we work
        </h2>
        <p class="text-sm mt-3">
          Integer gravida justo luctus dolor faucibus, quis ullamcorper orci
          pretium. Ut gravida sollicitudin faucibus. Etiam vitae neque finibus,
          interdum lacus quis, ornare diam. Quisque efficitur mauris id erat
          euismod vestibulum. Nam placerat malesuada risus, placerat accumsan
          metus. Quisque dictum velit lacus, tempor eleifend nibh ultrices ut.
        </p>
        <div class="mt-5 sm:mt-10">
          <RouteButton
            :button-route="{ title: 'Learn More', path: '/about' }"
          />
        </div>
      </div>
      <div class="mt-5 self-center justify-self-end sm:mt-10 lg:mt-0">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="hidden mx-auto h-32 lg:block"
        />
      </div>
    </div>
  </section>

  <section
    class="py-10 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-32 xl:px-48 xl:py-28"
  >
    <div class="mx-auto text-center lg:text-left lg:grid lg:grid-cols-3">
      <div class="lg:col-span-2">
        <h2 class="text-xl tracking-tight font-bold sm:text-2xl md:text-3xl">
          Recruiting?
        </h2>
        <p class="text-sm mt-3">
          Sit tincidunt pharetra enim diam posuere donec. Amet cursus integer
          sociis lectus gravida risus. Sit sem tortor quisque ipsum. At in neque
          dolor dignissim sagittis at molestie at. In lacus, in id velit quam
          facilisis lectus vulputate erat. Gravida ornare commodo, sagittis
          pulvinar.
        </p>
      </div>
      <div class="mt-5 sm:mt-10 lg:mt-0 self-center justify-self-end">
        <RouteButton
          :button-route="{ title: 'Start recruiting now', path: '/recruit' }"
        />
      </div>
    </div>
  </section>
</template>
