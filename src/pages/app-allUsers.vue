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
        name: "app-users",
        data() {
          return {
              cols: [
                  {
                      id: 'id',
                      label: 'Id',
                  },
                  {
                      id: 'name',
                      label: 'Name',
                  },
                  {
                      id: 'surname',
                      label: 'Surname',
                  },
                  {
                      id: 'email',
                      label: 'Email',
                  },
                  {
                      id: 'created_at',
                      label: 'Created at',
                  },
              ],
              rows: []
          }
        },
        methods: {
          
        },
        created() {
            UserService.getAllUsers()
            .then((users) => {
                this.rows = users;
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