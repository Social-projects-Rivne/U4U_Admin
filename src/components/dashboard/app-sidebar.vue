<template>
    <aside class="sidebar">
        <div class="sidebar-brand">
            <span class="text-light">Ukraine4U</span>
            <logout-button/>
        </div>
        <div class="sidebar-profile">
            <div class="sidebar-profile-avatar" v-bind:style="{ backgroundImage: 'url(' + moderatorAvatar + ')' }"></div>
            <div class="sidebar-profile-title text-light">{{ moderatorNickname }}</div>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Users</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item"><a class="link" :href="usersLink">Users</a></li>
                        <li class="subList-item"><a class="link" :href="bannedUsersLink">Banned</a></li>
                        <li class="subList-item"><a class="link" :href="businessUsersLink">Business</a></li>
                        <li class="subList-item"><a class="link" :href="userReviews">Users reviews</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
                <li class="navList-heading">Places</li>
                <li>
                    <ul class="subList subList">
                        <li class="subList-item"><a class="link" :href="onReviews">On Review ({{ notApprovePlacesLegth }})</a></li>
                        <li class="subList-item"><a class="link" :href="approvedPlaces">Approved</a></li>
                        <li class="subList-item"><a class="link" :href="rejectedPlaces">Rejected</a></li>
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
import userService from '../../services/user.service';
import moderatorService from '../../services/moderators.service';
import LogoutButton from "../controls/buttons/logout-button/logout-button";


export default {
    data: function(){
        return{
            moderatorsLink: process.env.VUE_APP_INNER_PATH + '/moderators',
            bannedUsersLink: process.env.VUE_APP_INNER_PATH + '/baned-users',
            businessUsersLink: process.env.VUE_APP_INNER_PATH + '/business-users',
            usersLink: process.env.VUE_APP_INNER_PATH + '/users',
            userReviews: process.env.VUE_APP_INNER_PATH + '/user-reviews',
            onReviews: process.env.VUE_APP_INNER_PATH + '/approve-places',
            approvedPlaces: process.env.VUE_APP_INNER_PATH + '/approved-places',
            rejectedPlaces: process.env.VUE_APP_INNER_PATH + '/rejected-places',
            notApprovePlacesLegth: null,
            moderatorAvatar: null,
            moderatorNickname: null
        }
    },
    components: {
        LogoutButton
    },
    created() {
        userService.getNotApprovedPlaces()
        .then((places) => {
            this.notApprovePlacesLegth = places.length
        })
        .catch((err) => {
            throw new Error(err);
        });
        moderatorService.getCurrentModerator()
            .then((moderator) => {
            const { avatar, nickname } = moderator;
            this.moderatorAvatar = avatar;
            this.moderatorNickname = nickname;
        })
        .catch((err) => {
            throw new Error(err);
        });
    }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";
</style>