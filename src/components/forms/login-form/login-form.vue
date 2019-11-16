<template>
    <div class="lf-component">
        <div class="lf-container">
            <div class="lf-header">
                <label class="lf-header-title">
                    Ukraine 4 You
                </label>
                <br>
                <label class="lf-header-subtitle">
                    Admin Panel
                </label>
            </div>
            <div class="lf-error-container" v-if="formErrorMsg">
                <span class="lf-error">{{ formErrorMsg }}</span>
            </div>
            <div class="lf-form-container">
                <form action="#" method="post" @submit="submitForm" class="lf-form">         
                    <user-email-input
                        label="Email" 
                        placeholder="Enter email"
                        ref="userEmailInput"
                    />
                    <user-password-input 
                        label="Password" 
                        placeholder="Enter password" 
                        ref="userPasswordInput"
                    />
                    <login-button 
                        ref="loginButton"
                    />
                </form>
            </div>
            <div class="lf-forgot-password" v-on:click="forgotPassword">
                Forgot Password?
            </div>
        </div>
    </div>
</template>

<script>
import UserEmailInput from '../../controls/inputs/user-email-input/user-email-input.vue'
import UserPasswordInput from '../../controls/inputs/user-password-input/user-password-input.vue'
import LoginButton from '../../controls/buttons/login-button/login-button.vue'
import AuthService from '../../../services/auth.service.js'

export default {
    data: function() {
        return {
            formErrorMsg: null
        }
    },
    components: {
        UserEmailInput,
        UserPasswordInput,
        LoginButton
    },
    methods:
    {
        submitForm: async function(e) {
            e.preventDefault()
            this.formErrorMsg = null

            const emailIsValid = this.$refs.userEmailInput.validateEmail()
            const passIsValid = this.$refs.userPasswordInput.validatePassword()
            this.$refs.loginButton.startLoading()
            if(emailIsValid && passIsValid) {

                try {
                    const formData = new FormData(e.target);
                    const res = await AuthService.login(formData.get('userEmail'), formData.get('userPassword'))

                    if(res) {
                        this.$router
                            .push("app")
                            .catch(routerErr => {
                                console.log("Handle router error:", routerErr)
                            })
                    } else {
                        this.showLoginError()
                    }
                } catch (errors) {
                    this.showLoginError()
                }
            } else {
                this.showLoginError()
            }
        },
        showLoginError() {
            this.$refs.loginButton.endLoading()
            this.formErrorMsg = "Login or password is incorrect. Plese, try again.";
        },
        forgotPassword() {
            this.$router
                .push('recovery-password')
                .catch(routerErr => {
                    console.log("Handle router error:", routerErr)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "login-form.scss";
</style>