<template>
  <app-layout>
   <app-table :cols="cols" :rows="rows"></app-table>
  </app-layout>
</template>



<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/table/table-layout.vue";
    import BannedService from '../services/banned.user.service';


    export default {
        name: "app-baned-users",
        data() {
          return {
              cols: [
                  {
                      id: 'id',
                      label: '#',
                  },
                  {
                      id: 'user_id',
                      label: 'User ID',
                  },
                  {
                      id: 'banned_by',
                      label: 'By Moderator',
                  },
                  {
                      id: 'ban_start',
                      label: 'From',
                  },
                  {
                      id: 'ban_end',
                      label: 'To',
                  },
                  {
                      id: 'reason',
                      label: 'Reason',
                  }
              ],
              rows: []
          }
        },
        methods: {

        },
        created() {
            BannedService.getAllBanned()
            .then((banned) => {
                this.rows = banned;
            })
            .catch((err) => {
                throw new Error(err);
            })
        },
        components: {
            AppLayout,
            AppTable
        }
    }
</script>

<style scoped>

</style>