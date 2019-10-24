<template>
    <div class="user-email">
        <label><b>{{ label }}</b></label>
        <input 
            type="text" 
            class="user-email-input" 
            name="userEmail"
            v-model="email" 
            v-bind:placeholder="placeholder"
        />
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            email: null,
            isValid: true
        }
    },
    props: [
        'label',
        'placeholder'
    ],
    methods: {
        validateEmail: function() {
            this.isValid = true
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (!this.email || !pattern.test(this.email)) {
                this.isValid = false
            }

            return this.isValid
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "user-email-input.scss";
</style>