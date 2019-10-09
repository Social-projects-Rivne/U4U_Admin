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
import UserEmailInput from '../../controls/inputs/UserEmailInput/UserEmailInput.vue'
import UserPasswordInput from '../../controls/inputs/UserPasswordInput/UserPasswordInput.vue'
import LoginButton from '../../controls/buttons/LoginButton/LoginButton.vue'

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
        submitForm(e) {
            e.preventDefault()
            this.formErrorMsg = null

            const emailIsValid = this.$refs.userEmailInput.validateEmail()
            const passIsValid = this.$refs.userPasswordInput.validatePassword()
            if(emailIsValid && passIsValid)
            {
                this.$refs.loginButton.startLoading()
                const formData = new FormData(e.target)

                this.$http.post(process.env.VUE_APP_LOGIN_PRODUCTION_PATH, {
                        email: formData.get('userEmail'),
                        password: formData.get('userPassword')
                    })
                    .then(response => {
                        this.$refs.loginButton.endLoading()

                        const accessToken = response.body.accessToken
                        const refreshToken = response.body.refreshToken
                        localStorage.setItem('accessToken', accessToken)
                        localStorage.setItem('refreshToken', refreshToken)

                        this.$router
                            .push("app")
                            .catch(routerErr => {
                                console.log("Handle router error:", routerErr)
                            })
                    }, error => {
                        this.$refs.loginButton.endLoading()
                        this.handleLoginErrors(error.body.errors)
                    })
            }
        },
        handleLoginErrors(errors)
        {
            for(let i = 0; i < errors.length; i++)
            {
                switch(errors[i].param)
                {
                    case 'email':
                        this.$refs.userEmailInput.validateEmail(null, errors[i].msg)
                        break;
                    case 'password':
                        this.$refs.userPasswordInput.validatePassword(null, errors[i].msg)
                        break;
                    default:
                        this.formErrorMsg = errors[i].msg
                        break;
                }
            }
        },
        forgotPassword() {
            this.$router
                .push('recoveryPassword')
                .catch(routerErr => {
                    console.log("Handle router error:", routerErr)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "LoginForm.scss";
</style>