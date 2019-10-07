<template>
    <div class="container d-flex h-100 w-100">
        <div class="row align-self-center justify-content-center w-100 h-50">
            <login-form></login-form>
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/forms/LoginForm.vue'

export default {
    components: {
        LoginForm
    }
}
</script>