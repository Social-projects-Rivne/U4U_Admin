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
        name: "user-reviews",
        data() {
          return {
              cols: [
                  {
                      id: 'emailUser',
                      label: 'Created by',
                  },
                  {
                      id: 'comment',
                      label: 'Comment',
                  },
                  {
                      id: 'rating',
                      label: 'Rating',
                  },
                  {
                      id: 'placeName',
                      label: 'Place name',
                  },
                  {
                      id: 'createdAt',
                      label: 'Created at',
                  }
              ],
              rows: []
          }
        },
        methods: {

        },
        created() {
            UserService.getAllReviews()
            .then((reviews) => {
                this.rows = reviews;
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