import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Show from '../views/Show.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/show/:id',
    component: Show,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
