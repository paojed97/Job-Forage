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
      <el-tabs type="border-card" class="w-full">
        <el-tab-pane label="Login">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-5 text-center md:text-left">
              <input
                type="text"
                placeholder="Email address"
                class="block border-2 border-slate-200 my-7 py-1.5 px-4 text-sm w-11/12"
              />
              <input
                type="text"
                placeholder="Password"
                class="block border-2 border-slate-200 my-7 py-1.5 px-4 text-sm w-11/12"
              />

              <RouterLink to="/" class="block mb-5 text-xs"
                >Forgot your password?</RouterLink
              >

              <input
                type="submit"
                value="Login"
                class="text-sm font-bold border-2 px-4 py-2"
              />
            </div>
            <div class="pl-5 py-5 text-center md:text-left">
              <h5 class="font-medium mb-3 text-lg">Not Registered?</h5>
              <div class="mb-5">
                <h6 class="font-medium text-sm">Search & Apply</h6>
                <p class="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div class="mb-5">
                <h6 class="font-medium text-sm">Upload your own video CV</h6>
                <p class="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div class="mb-5">
                <h6 class="font-medium text-sm">Job Alerts</h6>
                <p class="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div class="mb-10">
                <h6 class="font-medium text-sm">Free CV Review</h6>
                <p class="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <button class="text-sm font-semibold border-2 px-4 py-2">
                Register
              </button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Recruiter Login">
          <div
            class="grid md:grid-cols-2 gap-4"
            id="recruiter"
            role="tabpanel"
            aria-labelledby="recruiter-tab"
          >
            <div class="p-5 text-center md:text-left">
              <input
                type="text"
                placeholder="Email address"
                class="block border-2 border-slate-200 my-7 py-1.5 px-4 text-sm w-11/12"
              />
              <input
                type="text"
                placeholder="Password"
                class="block border-2 border-slate-200 my-7 py-1.5 px-4 text-sm w-11/12"
              />

              <RouterLink to="/" class="block mb-5 text-xs"
                >Forgot your password?</RouterLink
              >

              <input
                type="submit"
                value="Login"
                class="text-sm font-bold border-2 px-4 py-2"
              />
            </div>
            <div class="pl-5 py-5 text-center md:text-left">
              <h5 class="font-medium mb-3 text-lg">Not Registered?</h5>
              <div class="mb-5">
                <h6 class="font-medium text-sm">Search in CV-Library</h6>
                <p class="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div class="mb-5">
                <h6 class="font-medium text-sm">Advertise</h6>
                <p class="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div class="mb-10">
                <h6 class="font-medium text-sm">Customer Service</h6>
                <p class="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <button class="text-sm font-semibold border-2 px-4 py-2">
                Register
              </button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>
