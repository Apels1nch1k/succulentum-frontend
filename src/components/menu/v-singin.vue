<template>
    <div class="v-singin">
        <div class="">
            <form @submit.prevent="submit()">
                <div class="">
                <UIVInput 
                type="text" 
                placeholder="Логин" 
                v-model="user.username"
                :errors="error.username.length"
                />
                <span v-show="error.username.length">{{ error.username[0] }}</span>
                </div>
                <div class="">
                <UIVInput 
                type="password"
                placeholder="Пароль" 
                v-model="user.password"
                :errors="error.password.length"
                />
                <span v-show="error.password.length">{{ error.password[0] }}</span>
                </div>
                <UIVButton
                :bgColor="'#6aa172'"
                >Войти</UIVButton>
            </form>
        </div>
    </div>
</template>

<script setup >
import { useStore } from 'vuex';
import { reactive, computed } from 'vue'
const store = useStore()

const user = reactive({
    username: null,
    password: null,
})
const submit  = async () => store.dispatch('SingIn', user)
const error = computed(() => store.getters.getErrorsSingIn)

</script>

<style lang="less" scoped>

form{
    display: flex;
    flex-direction: column;
    gap: 4vh;
    justify-content: center;
    height: 40vh;
        span{
        font-size: 12px;
    }

}

form input {
    height: 3vh;
    width: 30vh;
    border-bottom: 2px solid @light_green;
}


</style>