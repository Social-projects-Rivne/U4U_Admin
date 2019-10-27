<template>
    <div>
        <h1>App Page</h1>
        <logout-button/>
    </div>
</template>

<script>
import LogoutButton from '../../components/controls/buttons/logout-button/logout-button.vue';
import apiServise from '../../services/api.service';

export default {
    components: {
        LogoutButton
    }
}
</script>