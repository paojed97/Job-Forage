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
      <h2 class="text-xl tracking-tight font-bold mb-7 sm:text-2xl md:text-3xl">
        Sign up to Job Forage
      </h2>

      <form class="w-full rounded bg-slate-100 mx-auto p-3 md:w-10/12 md:p-5">
        <h5 class="font-bold mb-3">Register</h5>
        <div class="mb-3">
          <label for="email" class="block mb-1 text-xs font-medium"
            >Email address</label
          >
          <input
            type="email"
            id="email"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="grid gap-3 mb-3 lg:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-1 text-xs font-medium"
              >First Name</label
            >
            <input
              type="text"
              id="first_name"
              class="border border-slate-200 text-xs rounded block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label for="last_name" class="block mb-1 text-xs font-medium"
              >Last Name</label
            >
            <input
              type="text"
              id="last_name"
              class="border border-slate-200 text-xs rounded block w-full p-2.5"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="block mb-1 text-xs font-medium"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <div class="mb-3">
          <label for="confirm_password" class="block mb-1 text-xs font-medium"
            >Confirm password</label
          >
          <input
            type="password"
            id="confirm_password"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <div class="mb-3">
          <label for="phone" class="block mb-1 text-xs font-medium"
            >Phone number</label
          >
          <input
            type="tel"
            id="phone"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="1234-567-8901"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div class="mb-3">
          <label for="location" class="block mb-1 text-xs font-medium"
            >Location</label
          >
          <input
            type="text"
            id="location"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Ibadan, Nigeria"
            required
          />
        </div>
        <div class="mb-3">
          <label for="curr_prev_job" class="block mb-1 text-xs font-medium"
            >Current/Previous Job Title</label
          >
          <input
            type="text"
            id="curr_prev_job"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Current/Previous Job Title"
          />
        </div>
        <div class="sm:flex">
          <button
            type="submit"
            class="block bg-white border-2 border-slate-200 cursor-pointer font-semibold mb-3 py-2.5 px-4 text-sm sm:mr-3 sm:mb-0"
          >
            Upload Your CV
          </button>
          <button
            type="submit"
            class="block bg-white border-2 border-slate-200 cursor-pointer font-semibold py-2.5 px-4 text-sm"
          >
            Upload Your Video CV
          </button>
        </div>
      </form>
      <p class="mt-1 mx-auto text-xs">
        By registering with Job Forage you agree to our Privacy Policy and Terms
        & Conditions
      </p>
    </div>
  </main>
</template>
