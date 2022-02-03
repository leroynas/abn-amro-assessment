import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Show from '@/views/Show/Show.vue';

export const ROUTE_DASHBOARD = 'route-dashboard';
export const ROUTE_SHOW = 'route-show';

const routes: Array<RouteRecordRaw> = [
  {
    name: ROUTE_DASHBOARD,
    path: '/',
    component: Dashboard,
  },
  {
    name: ROUTE_SHOW,
    path: '/show/:id',
    component: Show,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
