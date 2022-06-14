import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
import JobsViewVue from "../views/JobsView.vue";
import DetailsViewVue from "../views/DetailsView.vue";
import AlertsViewVue from "../views/AlertsView.vue";
import EmployersViewVue from "../views/EmployersView.vue";
import CareersViewVue from "../views/CareersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsViewVue,
    },
    {
      path: "/jobs/details",
      name: "details",
      component: DetailsViewVue,
    },
    {
      path: "/alerts",
      name: "alerts",
      component: AlertsViewVue,
    },
    {
      path: "/employers",
      name: "employers",
      component: EmployersViewVue,
    },
    {
      path: "/careers",
      name: "careers",
      component: CareersViewVue,
    },
  ],
});

export default router;
