<template>
    <div class="ue-container">
        <label><b>{{ label }}</b></label>
        <br>
        <span class="ue-error" v-if="!isValid">{{ errorMessage }}</span>
        <input 
            type="text" 
            class="ue-input" 
            name="userEmail" 
            @blur="validateEmail" 
            v-model="email" 
            v-bind:placeholder="placeholder"
            v-bind:class="!isValid ? 'ue-invalid' : ''" 
        />
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            email: null,
            errorMessage: null,
            isValid: true
        }
    },
    props: [
        'emailErrorMsg',
        'label',
        'placeholder'
    ],
    methods: {
        validateEmail: function(event, message)
        {
            if(message)
            {
                this.isValid = false
                this.errorMessage = message
            }
            else if(!this.email)
            {
                this.isValid = false
                this.errorMessage = "Email cannot be empty!"
            }
            else
            {
                this.isValid = true
                this.errorMessage = null
            }

            return this.isValid
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "UserEmailInput.scss";
</style>