<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";

const mainNavigation = ref([
  { title: "Home", path: "/" },
  { title: "Search Jobs", path: "/search" },
  { title: "Job Alerts", path: "/alerts" },
  { title: "Employers", path: "/employers" },
  { title: "Career Advice", path: "/advice" },
]);

const userNavigation = ref([
  { title: "Login", path: "/login" },
  { title: "Register your CV", path: "/register" },
  { title: "Recruiting?", path: "/recruit" },
]);
</script>

<template>
  <NavBar :main-nav="mainNavigation" :user-nav="userNavigation" />

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
