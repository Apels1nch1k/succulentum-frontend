import { createRouter, createWebHistory } from 'vue-router'
import Vmain from '@/components/page/main/v-main.vue'
import VShop from '@/components/page/shop/v-shop.vue'
import VProfil from '@/components/page/profil/v-profil.vue'
import VOrder from '@/components/page/order/v-order.vue'
import VDetailProduct from '@/components/page/detailProduct/v-detail-product.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Vmain
  },
  {
    path: '/shop',
    name: 'shop',
    component: VShop,
  },
  {
    path: '/profil',
    name: 'profil',
    component: VProfil,
  },
    {
    path: '/order',
    name: 'order',
    component: VOrder,
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: VDetailProduct,
  },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
