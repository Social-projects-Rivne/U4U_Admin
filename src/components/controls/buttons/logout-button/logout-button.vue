<template>
    <div class="lb-container">
        <button class="lb" v-on:click="logout">{{ message }}</button>
    </div> 
</template>

<script>
import LoginButtonVue from '../login-button/login-button.vue'
import { TokenService } from '../../../../services/token.service.js'
import ApiService from '../../../../services/api.service.js'

export default {
    data: function () {
        return {
            message: "Logout"
        }
    },
    methods: {
        startLoading: function () {
            this.message = "..."
        },
        endLoading: function () {
            this.message = "Logout"
        },
        logout: async function ()
        {
            this.startLoading()

            try {
                const { status } = await ApiService.post('/logout', {"accessToken": TokenService.getToken()})

                if (!status) {
                    throw new Error("Erorr status: " + status)
                }
            }
            catch(error) {
                console.log("Handle logout errors: ", error)
            }

            TokenService.removeToken()
            TokenService.removeRefreshToken()

            this.$router
                .push("login")
                .catch(routerErr => {
                    console.log("Handle router error:", routerErr)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "logout-button.scss";
</style>