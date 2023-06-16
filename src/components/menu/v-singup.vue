<template>
    <div class="v-singup">
        <div class="">
            <form @submit.prevent="submit(user)">
                <div class="">
                    <UIVInput  type="text" 
                    placeholder="Логин" 
                    v-model="user.username" 
                    :errors="error.email.length" />
                    <span v-if="error.username.length">{{error.username[0]}}</span>
                </div>
                <div class="">
                    <UIVInput  type="email" 
                    placeholder="Электронная почта" 
                    v-model="user.email" 
                    :errors='error.email.length'/>
                    <span v-if="error.email.length">{{ error.email[0] }}</span>
                </div>
                <div class="">
                    <UIVInput  type="password" 
                    placeholder="Пароль" 
                    v-model="user.password" 
                    :errors='error.password.length'/>
                    <span v-show="error.password.length">{{ error.password[0] }}</span>
                </div>
                <div class="">
                    <UIVInput  
                    type="password" 
                    placeholder="Повторите пароль" 
                    v-model="user.password_repeat" 
                    :errors='error.password_repeat.length'/>
                    <span v-if="error.password_repeat.length">{{ error.password_repeat[0] }}</span>
                </div>
                    <UIVButton
                    :bgColor="'#6aa172'"
                    :widthVW="20"
                    >Загеристрироваться</UIVButton>
            </form>
        </div>
    </div>
</template>

<script setup>

import { useStore } from 'vuex';
import { reactive, computed } from 'vue'

const store = useStore()
const user = reactive({
    username: null,
    email: null,
    password: null,
    password_repeat: null,
})
const error = computed(() => store.getters.getErrorsSingUp)
const submit = async (user) => store.dispatch('SingUp', user)
</script>

<style lang="less" scoped>


form{
    display: flex;
    flex-direction: column;
    gap: 4vh;
    justify-content: center;
    height: 40vh;
    span {
        font-size: 12px;
    }
}


 

</style>