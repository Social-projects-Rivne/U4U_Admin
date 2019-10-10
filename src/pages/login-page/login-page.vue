<template>
    <div class="container">
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from '../../components/forms/login-form/login-form.vue'

export default {
    components: {
        LoginForm
    }
}
</script>

<style lang="scss" scoped>
    @import "login-page.scss";
</style>