<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import NavFooter from "./components/NavFooter.vue";

const mainNavigation = ref([
  { title: "Home", path: "/" },
  { title: "Search Jobs", path: "/jobs" },
  { title: "Job Alerts", path: "/alerts" },
  { title: "Employers", path: "/employers" },
  { title: "Career Advice", path: "/careers" },
]);

const userNavigation = ref([
  { title: "Login", path: "/login" },
  { title: "Register your CV", path: "/register" },
  { title: "Recruiting?", path: "/recruit" },
]);

const jobSeekerNav = ref([
  { title: "Search Jobs", path: "/jobs" },
  { title: "Register", path: "/register" },
  { title: "Job Alerts", path: "/alerts" },
  { title: "Career Advice", path: "/careers" },
]);

const popularNav = ref([
  { title: "Search Jobs", path: "/jobs" },
  { title: "Employers", path: "/employers" },
  { title: "Agencies", path: "/employers" },
]);

const recruiterNav = ref([
  { title: "CV Database Access", path: "/recruit" },
  { title: "Advertise Jobs", path: "/recruit" },
  { title: "Search CVs", path: "/recruit" },
  { title: "Test CV Search", path: "/recruit" },
]);

const aboutNav = ref([
  { title: "About Us", path: "/recruit" },
  { title: "Contact Us", path: "/contact" },
  { title: "Work for Us", path: "/join" },
  { title: "Help", path: "/help" },
  { title: "FAQ", path: "/faq" },
]);
</script>

<template>
  <NavBar :main-nav="mainNavigation" :user-nav="userNavigation" />
  <RouterView />
  <NavFooter
    :job-seekers="jobSeekerNav"
    :popular="popularNav"
    :recruiters="recruiterNav"
    :about="aboutNav"
  />
</template>

<style>
@import "@/assets/base.css";

body {
  font-family: "Inter", sans-serif;
}
</style>
