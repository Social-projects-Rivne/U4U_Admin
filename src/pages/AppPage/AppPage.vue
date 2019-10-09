<template>
    <div>
        <h1>App Page</h1>
        <logout-button/>
    </div>
</template>

<script>
import LogoutButton from '../../components/controls/buttons/LogoutButton/LogoutButton.vue'

export default {
    components: {
        LogoutButton
    }
}
</script>