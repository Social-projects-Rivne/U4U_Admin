<template>
    <div class="grid">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <app-table></app-table>
    </div>
</template>

<script>
import AppHeader from "@/components/dashboard/app-header.vue";
import AppSidebar from "@/components/dashboard/app-sidebar.vue";
import AppTable from "@/components/dashboard/table/table-layout.vue";

export default {
    name: "app-layout",
    components: {
        AppHeader,
        AppSidebar,
        AppTable
    }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";
</style>