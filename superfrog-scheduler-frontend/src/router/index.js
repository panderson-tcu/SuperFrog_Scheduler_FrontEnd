import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'
import routes from './routes';
import setupGuard from './guard';
import utils from '@/utils';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [...routes],
});


export async function setupRouter(app) {
  if(utils.cacheUtils.get('login_token')?.token){
    // get user info and save it to Pinia, then we can have access to user's permission list in different components
    const userStore = userUserStore();
    await userStore.getUserInfo();

    autoloadDynamicRoutes(router); //add more route records to the router
  }
  
  setupGuard(router);
  app.use(router);
}

export default router
