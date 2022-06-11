import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
import JobsViewVue from "../views/JobsView.vue";
import DetailsViewVue from "../views/DetailsView.vue";
import AlertsViewVue from "../views/AlertsView.vue";

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
    }
  ],
});

export default router;
