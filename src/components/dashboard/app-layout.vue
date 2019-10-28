<template>
    <div class="grid">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import AppHeader from "@/components/dashboard/app-header.vue";
import AppSidebar from "@/components/dashboard/app-sidebar.vue";

export default {
    name: "app-layout",
    components: {
        AppHeader,
        AppSidebar,
    }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";

    .content {
        padding-top: 1rem;
    }
</style>