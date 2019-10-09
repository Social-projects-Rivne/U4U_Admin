<template>
    <div class="container">
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from '../../components/forms/LoginForm/LoginForm.vue'

export default {
    components: {
        LoginForm
    }
}
</script>

<style lang="scss" scoped>
    @import "LoginPage.scss";
</style>