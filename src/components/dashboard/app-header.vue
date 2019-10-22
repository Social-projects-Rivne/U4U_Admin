<template>
    <header class="header">
        <i class="header-menu">
            <font-awesome-icon icon="bars" />
        </i>
        <div class="header-search">
            <input
                type="text"
                class="header-input"
                v-model="search"
                placeholder="Search..."
                @keyup.enter="submit"
            />
        </div>
    </header>
</template>

<script>
import { EventBus } from "../../../event-bus.js";

export default {
    name: "app-header",
    data() {
        return {
            search: ""
        };
    },
    methods: {
        submit: function() {
            EventBus.$emit("inputData", this.search);
            this.search = "";
        }
    }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";
</style>