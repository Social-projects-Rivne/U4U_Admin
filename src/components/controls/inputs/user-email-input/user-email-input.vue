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
            this.isValid = true
            this.errorMessage = null
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (message)
            {
                this.isValid = false
                this.errorMessage = message
            }
            else if (!this.email)
            {
                this.isValid = false
                this.errorMessage = "Email cannot be empty!"
            }
            else if (!pattern.test(this.email))
            {
                this.isValid = false
                this.errorMessage = "Wrong email format!"
            }
            

            return this.isValid
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "user-email-input.scss";
</style>