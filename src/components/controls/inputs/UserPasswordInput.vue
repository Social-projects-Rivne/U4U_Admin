<template>
    <div class="user-password-input-container">
        <label>{{ label }}</label>
        <input type="password" name="userPassword" class="user-password-input" v-model="password" v-bind:placeholder="placeholder"/>
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            label: "Password",
            placeholder: "Enter password",
            password: ""
        }
    }
}
</script>

<style scoped>
    .user-password-input-container {
        margin: 7% 0 7% 0;
        width: 100%;
        display: block;
    }
    .user-password-input {
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