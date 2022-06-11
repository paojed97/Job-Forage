<template>
  <div>
    <div class="container flex flex-wrap mx-auto">
      <div class="hidden mt-10 sm:mt-20 md:grid gap-2 md:grid-cols-4">
        <div>
          <input
            type="text"
            placeholder="Keywords/Job Title"
            class="block w-full p-2"
          />
        </div>
        <div>
          <input type="text" placeholder="Location" class="block w-full p-2" />
        </div>
        <div>
          <input type="text" placeholder="Distance" class="block w-full p-2" />
        </div>
        <div>
          <input
            type="submit"
            value="Find jobs"
            class="block bg-white cursor-pointer font-semibold py-2 px-8"
          />
        </div>
      </div>
    </div>
    <div class="container flex flex-wrap mx-auto">
      <button
        class="hidden md:block border-2 border-black mt-3 px-3 py-1 sm:font-semibold sm:px-6"
      >
        Advanced filters
      </button>
    </div>
  </div>
</template>
