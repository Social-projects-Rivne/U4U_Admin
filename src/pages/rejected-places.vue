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
        name: "rejected-places",
        data() {
          return {
              cols: [
                  {
                      id: 'userEmail',
                      label: 'Created by',
                  },
                  {
                      id: 'description',
                      label: 'Description',
                  },
                  {
                      id: 'name',
                      label: 'Place name',
                  },
                   {
                      id: 'rejectReason',
                      label: 'Reject reason',
                  },
                   {
                      id: 'moderateBy',
                      label: 'Moderated By',
                  },
              ],
              rows: []
          }
        },
        methods: {

        },
        created() {
            UserService.getRejectedPlaces()
            .then((places) => {
                this.rows = places;
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