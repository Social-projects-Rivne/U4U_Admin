<template>
  <app-layout>
   <app-table :cols="cols" :rows="rows"></app-table>
  </app-layout>
</template>



<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/table/table-layout.vue";
    import reportService from '../services/report.service';


    export default {
        name: "reports",
        data() {
          return {
              cols: [
                  {
                      id: 'createdBy',
                      label: 'Created by',
                  },
                  {
                      id: 'placeName',
                      label: 'Place name',
                  },
                  {
                      id: 'reportComment',
                      label: 'Report comment',
                  },
                  {
                      id: 'createdAt',
                      label: 'Created at'
                  },
                  {
                      id: 'solved',
                      label: 'Is solved ?'
                  }
              ],
              rows: []
          }
        },
        methods: {

        },
        created() {
            reportService.getAllReports()
            .then((reports) => {
                this.rows = reports;
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