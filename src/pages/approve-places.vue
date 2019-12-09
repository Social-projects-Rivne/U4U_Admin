<template>
  <app-layout>
   <app-table :cols="cols" :rows="rows"></app-table>
  </app-layout>
</template>



<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/approve-table/table-layout.vue";
    import PlacesService from '../services/places.servise';


    export default {
        name: "approved-places",
        data() {
          return {
              cols: [
                  {
                      id: 'userEmail',
                      label: 'Created by',
                  },
                  {
                      id: 'createdAt',
                      label: 'Created at'
                  },
                  {
                      id: 'name',
                      label: 'Place name',
                  },
              ],
              rows: []
          }
        },
        methods: {

        },
        created() {
            PlacesService.getNotApprovedPlaces()
            .then((places) => {
                this.rows = places;
                console.log(places);
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