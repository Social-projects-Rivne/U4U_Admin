<template>
    <div class="login-button-container">
        <button class="login-button">Login</button>
    </div> 
</template>

<style scoped>
    .login-button-container {
        width: 100%;
        height: 12%;
        margin: 7% 0 7% 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-button {
        width: 40%;
        height: 80%;
        background-color: #41B883;
        color: #ffffff;
        border-radius: 5px;
        border: none;
        font-weight: 600;
    }
    *:focus {
        outline: none;
    }
</style>