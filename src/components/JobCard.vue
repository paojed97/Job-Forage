<script setup></script>

<template>
  <RouterLink to="/jobs/details" class="flex items-center shadow-md">
    <div class="flex flex-col justify-center p-5">
      <h5 class="mb-1 text-lg font-bold tracking-tight uppercase">Job Title</h5>
      <h6 class="mb-1 text-sm">Full Time/Permanent - Company/Location</h6>
      <p class="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam
        assumenda doloribus sapiente sed autem! Id veritatis facilis quas iste
        mollitia, repellendus recusandae asperiores doloribus enim quam esse
        cumque rerum.
      </p>
      <button class="bg-slate-200 border-2 mt-4 px-4 py-2 w-32">
        Apply Now
      </button>
    </div>
    <img
      src="@/assets/image-4.jpg"
      alt="image"
      class="object-cover w-full hidden md:block md:h-56 lg:h-64"
    />
  </RouterLink>
</template>
