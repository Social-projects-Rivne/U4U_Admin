<template>
    <div class="lb-container">
        <button class="lb" v-on:click="logout">{{ message }}</button>
    </div> 
</template>

<script>
import { fail } from 'assert'
import LoginButtonVue from '../LoginButton/LoginButton.vue'

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
            
            //TODO: move this code to wrapper like requestApi.js
            try {
                const accessTokenStatus = await this.$http.post(process.env.VUE_APP_PRODUCTION_PATH + '/check-token', {
                    accessToken: localStorage.getItem("accessToken")
                })

                if(!accessTokenStatus.body.status)
                {
                    try {
                        const refreshTokenStatus = await this.$http.post(process.env.VUE_APP_PRODUCTION_PATH + '/refresh-token/', {
                            refreshToken: localStorage.getItem("refreshToken")
                        })

                        const accessToken = refreshTokenStatus.body.newAccessToken
                        const refreshToken = refreshTokenStatus.body.newRefreshToken

                        localStorage.setItem('accessToken', accessToken)
                        localStorage.setItem('refreshToken', refreshToken)
                    }
                    catch (error)
                    {
                        console.log("Handle refresh access token error: ", error)
                    }
                }

                try {
                    const logoutStatus = await this.$http.post(process.env.VUE_APP_PRODUCTION_PATH + '/logout', {
                        accessToken: localStorage.getItem("accessToken")
                    })

                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')

                    this.$router
                        .push("login")
                        .catch(routerErr => {
                            console.log("Handle router error:", routerErr)
                        })
                }
                catch (error) {
                    console.log("Handle logout error: ", error)
                }
               
            }
            catch (error)
            {
                console.log("Handle check access token error: ", error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "LogoutButton.scss";
</style>