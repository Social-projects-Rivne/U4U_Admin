<template>
  <app-layout>
   <app-table :cols="cols" :rows="rows"></app-table>
  </app-layout>
</template>



<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/table/table-layout.vue";
    import UserService from '../services/user.service';


    export default {
        name: "app-baned-users",
        data() {
          return {
              cols: [
                  {
                      id: 'user_email',
                      label: 'User email',
                  },
                  {
                      id: 'moderator_email',
                      label: 'Banned by',
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
            UserService.getAllBanned()
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