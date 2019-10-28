<template>
    <div class="lb-container">
        <button class="lb" v-on:click="logout">{{ message }}</button>
    </div> 
</template>

<script>
import AuthService from '../../../../services/auth.service.js'

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
                await AuthService.logout()

                this.$router
                    .push("login")
                    .catch(routerErr => {
                        console.log("Handle router error:", routerErr)
                    })
            } catch (errors) {
                console.log("Handle logout errors: ", errors)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "logout-button.scss";
</style>