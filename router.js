import Vue from 'vue';
import VueRouter from 'vue-router';

import CustomerList from './components/CustomerList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/customer-list', // Add a new route for the CustomerList component
    name: 'CustomerList',
    component: CustomerList
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
