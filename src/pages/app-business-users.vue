<template>
  <app-layout>
   <app-table :cols="cols" :rows="rows"></app-table>
  </app-layout>
</template>



<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/table/table-layout.vue";
    import BusinessService from '../services/business.user';


    export default {
        name: "app-business-users",
        data() {
          return {
              cols: [
                  {
                      id: 'id',
                      label: 'Id',
                  },
                  {
                      id: 'nickname',
                      label: 'Nick Name',
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
                  }
              ],
              rows: []
          }
        },
        methods: {

        },
        created() {
            BusinessService.getAllBusiness()
            .then((business) => {
                this.rows = business;
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