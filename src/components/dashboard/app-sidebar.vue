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
                        <li class="subList-item"><a class="link" :href="bannedUsersLink">Banned</a></li>
                        <li class="subList-item"><a class="link" :href="businessUsersLink">Business</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Places</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item"><a class="link">On Review</a></li>
                        <li class="subList-item"><a class="link">Approved</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Reports</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item"><a class="link">Places</a></li>
                        <li class="subList-item"><a class="link">Users</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Tools</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item"><a class="link" :href="moderatorsLink">Moderators</a></li>
                        <li class="subList-item"><a class="link">Logs</a></li>
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
            moderatorsLink: 'http://localhost:8081/moderators',
            bannedUsersLink: 'http://localhost:8081/baned-users',
            businessUsersLink: 'http://localhost:8081/business-users'
        }
    }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";
</style>