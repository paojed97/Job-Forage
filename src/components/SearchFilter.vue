<template>
  <div>
    <div class="container flex flex-wrap mx-auto">
      <div class="w-full md:grid gap-2 md:grid-cols-4">
        <div>
          <input
            type="text"
            placeholder="Keywords/Job Title"
            class="block border-2 border-slate-200 w-full py-1.5 px-4 text-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            class="block border-2 border-slate-200 w-full py-1.5 px-4 text-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Distance"
            class="block border-2 border-slate-200 w-full py-1.5 px-4 text-sm"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Find jobs"
            class="block bg-white border-2 border-slate-200 cursor-pointer font-semibold py-1.5 px-8 text-sm"
          />
        </div>
      </div>
    </div>
    <!-- <div class="container flex flex-wrap mx-auto">
      <button
        class="hidden md:block border-2 border-black mt-3 px-3 py-1 text-sm sm:font-semibold sm:px-6"
      >
        Advanced filters
      </button>
    </div> -->
  </div>
</template>
