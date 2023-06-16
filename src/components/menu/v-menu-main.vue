<script setup>
import IconChevronRight40Vue from '../icons/IconChevronRight40.vue'
import IconCloseVue from '../icons/IconClose.vue'
import vSinginVue from './v-singin.vue'
import vSingupVue from './v-singup.vue'
import { useStore } from 'vuex'
import { computed,  watch} from 'vue'



const store = useStore()

const isAuthenticated = computed(() => store.getters.isAuthenticated)
const isVisibleAuth = computed(() => store.getters.isVisibleAuth)
const singUpShow  = computed(() => store.getters.singUpShow)
const singInShow = computed(() => store.getters.singInShow)



const setSingUpShow = () => store.dispatch('setSingUpShow')
const setSingInShow = () => store.dispatch('setSingInShow')
const closeMenu = () => store.dispatch('setVisibleMenu')
const setVisibleAuth = () => store.dispatch('setVisibleAuth')
const logout = () => store.dispatch('logout')
const ordersUser = () => store.dispatch('ordersUser')


const getUSer = computed(() => store.getters.getUSer)
ordersUser()
watch(isAuthenticated, () => {
    
    setVisibleAuth()
    

    

}) 

const url = process.env.VUE_APP_API_BASE






</script>
<template>
    <div class="v-menu-main__menu__bg">
        <div class="v-menu-main__container">
            <div class="v-menu-main__main__menu">
                <div class="">
                    <IconCloseVue class="icon_close icon_base" @click="closeMenu"/>
                </div>
                <div class="v-menu-main__navigation">
                    <nav>
                        <div class="v-menu-main__menu">
                            <ul>
                                <li><router-link to="/" @click="closeMenu" class="v-menu-main__name__page">Главная</router-link></li>
                                <li><router-link to="/shop" @click="closeMenu" class="v-menu-main__name__page">Магазин</router-link></li>

                                    
                                <li v-if="isAuthenticated">
                                    <a v-if="getUSer.is_superuser"  class="v-menu-main__name__page" :href="url + 'admin'"> Админка </a>
                                    <router-link v-else to="/profil" @click="closeMenu" class="v-menu-main__name__page"> Профиль </router-link>
                                
                                </li>
                               
                                <li><router-link to="/" @click="closeMenu" class="v-menu-main__name__page">Контакты</router-link></li>
                                <li v-if="isAuthenticated"><a @click="logout()" class="v-menu-main__name__page">Выйти</a></li>
                                <li v-else><a @click="setVisibleAuth()" class="v-menu-main__name__page">Войти</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div class="v-menu-main__photo__second__menu__section" >
                    <transition name="auth"
                        enter-active-class ="auth-enter-active"
                        leave-active-class ="auth-leave-active"


                        >
                            <div class="v-menu-main__auth" v-if="isVisibleAuth" >
                                <div class="v-menu-main__auth__close" @click="setVisibleAuth()">
                                    <IconChevronRight40Vue class="icon_chevron"/>
                                    <IconCloseVue class="icon_close_auth"/>
                                </div>
                                <div class="v-menu-main__auth__container">
                                    <div class="v-menu-main__auth__choice">
                                        <span @click="setSingInShow()" :class="{'the_selected_item': singInShow }">Авторизация</span>
                                        <span @click="setSingUpShow()" :class="{ 'the_selected_item': singUpShow }">Регистрация</span>
                                    </div>
                                    <div class="">
                                        <Transition name="fade"
                                        
                                        :duration="{ 'enter': 4000, 'leave': 200 }"
                                        >
                                            <vSinginVue v-show="singInShow"/>
                                        </Transition>
                                        
                                        <transition name="fade"
                                        
                                        :duration="{ 'enter': 4000, 'leave': 200 }"
                                        
                                        >
                                        <vSingupVue v-show="singUpShow"/> 
                                        </transition>
                                        
                                    </div>

                                </div>
                            </div>
                    </transition>
                
                <div class="v-menu-main__photo" >
                
                    <img  :src="require('../../../public/img/menuMainPhoto.jpg')" alt="" >
                </div>    
                    

            </div>
            
        </div>
    </div>
</template>



<style lang="less" scoped>


.the_selected_item{
    border-bottom: 2px solid @light_green;
}
.v-menu-main__menu__bg {
    width: 100vw;
    height: 100vh;
    background: @dark_green;
    position: fixed;
    z-index: 100;
    top: 0;
    overflow-y: hidden;

}
.icon_close{
    margin: 3vh 3vw;
    height: 5vh;
    width: 5vh;
}    

.v-menu-main__container{
    display: flex;
    justify-content: space-between;
}
.v-menu-main__main__menu{
    width: 50vw;
    height: 100vh;
        @media @breakpoint-modile {
            width: 100vw;
            height: 100vh;
    }

}
.v-menu-main__navigation {
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    margin-top: 20vh;
        @media @breakpoint-modile {
        
    }
}
.v-menu-main__menu ul {
    display: flex;
    flex-direction: column;
    gap: 3vh;
}
.v-menu-main__name__page {
    font-family: 'Unbounded';
    font-size: 40px;
    color: #6aa172;
    font-weight: 800;
    user-select: none;
    letter-spacing: 2px;
    transition: .4s;
    cursor: pointer;
}
.v-menu-main__name__page:hover {
    opacity: 70%;
}
.v-menu-main__photo img {
    width: 50vw;
    height: 100vh;
    @media @breakpoint-modile {
        display: none;
    }
}


.v-menu-main__auth{
    width: 50vw;
    height: 101vh;
    background: white;
    position: absolute;
    z-index: 102;
    right: 0;
    display: flex;
    align-items: center;
    @media @breakpoint-modile {
        width: 100vw;
        height: 100vh;
    }
}
.v-menu-main__auth__close {
    height: 100vh;
    width: 2vw;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    @media @breakpoint-modile {
        position: absolute;
        height: 8vh;
        width: 8vh;
        top: 1vh;
        left: 0px;
    }


    

}

.icon_chevron{
    display: block;
    @media @breakpoint-modile {
        display: none;

    }
}

.icon_close_auth {
    display: none;
    @media @breakpoint-modile {
        display: block;
        margin: 20px 0px 0px 20px;
    }
}

.v-menu-main__auth__close:hover{
    opacity: 70%;
}
.v-menu-main__auth__container {
    display: flex;
    // justify-content: center;
    align-items: center;
    width: 50vw;
    height: 50vh;
    flex-direction: column;
    

    @media @breakpoint-modile {
        width: 100vw;
    }
}

.v-menu-main__auth__choice {
    display: flex;
    gap: 5vh;
    position: relative;
    top: 1px;
    margin-bottom: 4vh;
    @media @breakpoint-modile {
        gap: 2vh;
    }

}
.v-menu-main__auth__choice span {
    transition: .4s;
    cursor: pointer;
}

.v-menu-main__auth__choice span:hover {
    opacity: 70%;
}

.auth-enter-active{
  animation: animateSlideAuthOpen 0.5s  linear forwards;
}

.auth-leave-active{
    animation: animateSlideAuthClose 0.5s  linear forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}






</style>