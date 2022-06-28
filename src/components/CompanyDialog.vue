<template>
  <el-dialog title="Sign up to Job Forage Agencies">
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
      By registering with Job Forage you agree to our Privacy Policy and Terms &
      Conditions
    </p>
  </el-dialog>
</template>
