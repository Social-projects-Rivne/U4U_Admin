<template>
    <div class="user-email-input-container">
        <label>{{ label }}</label>
        <input type="text" class="user-email-input" name="userEmail" v-model="email" v-bind:placeholder="placeholder"/>
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            label: "Login",
            placeholder: "Enter Login",
            email: ""
        }
    }
}
</script>

<style scoped>
    .user-email-input-container {
        margin: 7% 0 7% 0;
        width: 100%;
        display: block;
    }
    .user-email-input {
        width: 100%;
        height: 38px;
        padding: 10px;
        border-radius: 4px;
        border: 2px solid #41B883;
    }
    *:focus {
        outline: none;
    }
</style>