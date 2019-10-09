<template>
    <div class="lb-container">
        <button class="lb">{{ message }}</button>
    </div> 
</template>

<script>
export default {
    data: function () {
        return {
            message: "Login"
        }
    },
    methods: {
        startLoading: function () {
            this.message = "..."
        },
        endLoading: function () {
            this.message = "Login"
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "LoginButton.scss";
</style>