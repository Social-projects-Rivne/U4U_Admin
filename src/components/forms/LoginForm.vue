<template>
    <div class="login-form-container">
        <form action="#" method="post" @submit="submitForm" class="login-form">
            <div class="login-form-header">
                <div style="text-align:center;">
                    <label style="font-size:1.2rem;font-weight:600;">
                        Ukraine 4 You
                    </label>
                    <br>
                    <label style="font-size:1.1rem;">
                        Admin Panel
                    </label>
                </div>
            </div>
            <user-email-input/>
            <user-password-input/>
            <login-button></login-button>
            <div class="forgot-password" v-on:click="forgotPassword">
                Forgot Password?
            </div>
        </form>
    </div>
</template>

<script>
import UserEmailInput from '../controls/inputs/UserEmailInput.vue'
import UserPasswordInput from '../controls/inputs/UserPasswordInput.vue'
import LoginButton from '../controls/buttons/LoginButton.vue'

export default {
    components: {
        UserEmailInput,
        UserPasswordInput,
        LoginButton
    },
    methods:
    {
        submitForm(e) {
            e.preventDefault()
            const formData = new FormData(e.target)

            //do validation
            const userData = {
                login: formData.get('userEmail'),
                password: formData.get('userPassword')
            }

            console.log(userData)
            //this.$emit('submitLoginForm', userData)
        },
        forgotPassword() {
            this.$router.push('passwordRecovery')
        }
    }
}
</script>

<style scoped>
    .login-form-container {
        width: 50%;
        height: 97%;
        border-radius: 10px;
        background-color: #ffffff;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        display: flex;
        justify-content: center;
    }
    .login-form {
        width: 80%;
    }
    .forgot-password {
        width:100%; 
        display: flex;
        justify-content: center;
        cursor: pointer;
        color: #707070;
    }
    .forgot-password:hover {
        color: #41B883;
    }
    .login-form-header {
        width:100%; 
        display: flex;
        justify-content: center;
        align-items:center;
        margin-top:4%;
        font-size: 1.4rem;
    }
    .login-form-header  label{
        margin: 0;
    }
</style>