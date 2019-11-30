<template>
    <header class="header">
        <i class="header-menu">
            <font-awesome-icon icon="bars" />
        </i>

        <searchBar></searchBar>
    </header>
</template>

<script>
import searchBar from './app-search.vue'

export default {
    name: "app-header",
    components: {
      searchBar,
    }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";
</style>