<template>
    <div class="up-container">
        <label><b>{{ label }}</b></label>
        <br>
        <span class="up-error" v-if="!isValid">{{ errorMessage }}</span>
        <input 
            type="password" 
            name="userPassword" 
            class="up-input"
            @blur="validatePassword"  
            v-model="password" 
            v-bind:placeholder="placeholder"
            v-bind:class="!isValid ? 'up-invalid' : ''" 
        />
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            password: null,
            errorMessage: null,
            isValid: true
        }
    },
    props: [
        'passwordErrorMsg',
        'label',
        'placeholder'
    ],
    methods: {
        validatePassword: function(event, message)
        {
            this.isValid = true
            this.errorMessage = null

            if(message)
            {
                this.isValid = false
                this.errorMessage = message
            }
            else if(!this.password)
            {
                this.isValid = false
                this.errorMessage = "Password cannot be empty!"
            }

            return this.isValid
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "user-password-input.scss";
</style>