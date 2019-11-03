<template>
    <aside class="sidebar">
        <div class="sidebar-brand">
            <span class="text-light">Ukraine4U</span>
        </div>
        <div class="sidebar-profile">
            <div class="sidebar-profile-avatar"></div>
            <div class="sidebar-profile-title text-light">Ryan Gosling</div>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Users</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item">Premium</li>
                        <li class="subList-item">Banned</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Places</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item">On Review</li>
                        <li class="subList-item">Approved</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Reports</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item">Places</li>
                        <li class="subList-item">Users</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Tools</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item"><a :href="moderatorsLink">Moderators</a></li>
                        <li class="subList-item">Logs</li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>

export default {
    data: function(){
        return{
            moderatorsLink: 'http://localhost:8081/moderators'
        }
    }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";
</style>