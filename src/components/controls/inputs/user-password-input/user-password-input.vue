<template>
    <div class="user-password">
        <label><b>{{ label }}</b></label>
        <input 
            type="password" 
            name="userPassword" 
            class="user-password-input"  
            v-model="password" 
            v-bind:placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            password: null,
            isValid: true
        }
    },
    props: [
        'label',
        'placeholder'
    ],
    methods: {
        validatePassword: function() {
            this.isValid = true

            if(!this.password) {
                this.isValid = false
            }

            return this.isValid
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "user-password-input.scss";
</style>