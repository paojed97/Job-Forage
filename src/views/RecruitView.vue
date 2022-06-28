<script setup>
import { ref } from "vue";

const companyDialog = ref(false);
</script>

<template>
  <main
    class="px-4 py-4 sm:px-6 md:pb-4 md:pt-6 lg:pb-5 lg:pt-7 lg:px-32 xl:px-48 xl:pb-7 xl:pt-9"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <h3
        class="text-lg mx-auto tracking-tight font-semibold mb-7 sm:text-xl md:text-2xl lg:my-5"
      >
        Search our CV Database & Advertise Jobs today
      </h3>

      <div
        class="bg-slate-100 grid gap-16 md:mt-5 mb-10 mx-auto p-7 rounded w-full md:grid-cols-2 md:gap-28"
      >
        <div>
          <h5 class="font-semibold text-lg">Advertise Jobs</h5>
          <p class="my-7 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            class="block bg-white border-2 border-slate-200 cursor-pointer font-semibold py-2.5 px-4 text-xs"
            @click="companyDialog = true"
          >
            Advertise Now
          </button>
        </div>
        <div>
          <h5 class="font-semibold text-lg">Search CVs</h5>
          <p class="my-7 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            class="block bg-white border-2 border-slate-200 cursor-pointer font-semibold py-2.5 px-4 text-xs"
          >
            Search CVs Now
          </button>
        </div>
      </div>

      <div class="mb-12 mx-auto w-full">
        <h3
          class="text-lg text-center tracking-tight font-semibold mb-7 sm:text-xl md:text-2xl"
        >
          Simple and effective recruitment solutions fo everyone
        </h3>
        <img
          src="../assets/image-4.jpg"
          alt="Placeholder"
          class="h-64 object-cover w-full"
        />
      </div>

      <div class="mb-12 mx-auto w-full">
        <h3
          class="text-lg text-center tracking-tight font-semibold mb-7 sm:text-xl md:text-2xl"
        >
          Why Job Forage?
        </h3>
        <img
          src="../assets/image-4.jpg"
          alt="Placeholder"
          class="h-64 object-cover w-full"
        />
      </div>

      <div class="mb-12 mx-auto w-full">
        <h3
          class="text-lg text-center tracking-tight font-semibold mb-7 sm:text-xl md:text-2xl"
        >
          Benefits of recruiting with Job Forage
        </h3>
        <img
          src="../assets/image-4.jpg"
          alt="Placeholder"
          class="h-64 object-cover w-full"
        />
      </div>

      <div class="mb-12 mx-auto w-full">
        <h3
          class="text-lg text-center tracking-tight font-semibold mb-7 sm:text-xl md:text-2xl"
        >
          Reach the best candidates
        </h3>
        <img
          src="../assets/image-4.jpg"
          alt="Placeholder"
          class="h-64 object-cover w-full"
        />
      </div>

      <div class="mb-12 mx-auto w-full">
        <h3
          class="text-lg text-center tracking-tight font-semibold mb-7 sm:text-xl md:text-2xl"
        >
          Success Stories
        </h3>
        <img
          src="../assets/image-4.jpg"
          alt="Placeholder"
          class="h-64 object-cover w-full"
        />
      </div>
    </div>

    <el-dialog v-model="companyDialog" title="Sign up to Job Forage Agencies">
      <form class="w-full rounded bg-slate-100 mx-auto p-3 md:w-10/12 md:p-5">
        <h5 class="font-bold mb-3">Register</h5>
        <div class="mb-3">
          <input
            type="text"
            id="company_name"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Company Name"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            id="company_email"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Company Email Address"
            required
          />
        </div>
        <div class="grid gap-3 mb-3 lg:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              class="border border-slate-200 text-xs rounded block w-full p-2.5"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              class="border border-slate-200 text-xs rounded block w-full p-2.5"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div class="mb-3">
          <input
            type="password"
            id="password"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Password (Minimum of 8 characters)"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            id="confirm_password"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Repeat password"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="tel"
            id="phone"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Phone number"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            id="location"
            class="border border-slate-200 text-xs rounded block w-full p-2.5"
            placeholder="Company Address"
            required
          />
        </div>
        <div class="sm:flex">
          <button
            type="submit"
            class="block bg-white border-2 border-slate-200 cursor-pointer font-bold mb-3 py-2.5 px-4 text-xs sm:mr-3 sm:mb-0"
          >
            Upload Your Company Logo
          </button>
        </div>
      </form>
      <p class="mt-1 text-center text-xs">
        By registering with Job Forage you agree to our Privacy Policy and Terms
        & Conditions
      </p>
    </el-dialog>
  </main>
</template>
