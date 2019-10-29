<template>
 <app-layout>
  <app-table
           method="getBusinessUsers"
          :pageSize="1"
          :cols="cols"></app-table>
 </app-layout>
</template>

<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/table/table-layout.vue";

    export default {
        name: "business-page",
        data: () => ({
          cols: [
              {
                  id: 'name',
                  label: 'name'
              },
              {
                  id: 'surname',
                  label: 'surname'
              },
              {
                id: 'email',
                label: 'email',
              },
              {
                  id: 'birthDay',
                  label: 'Birth day'
              }
          ]
        }),

        components: {
            AppLayout,
            AppTable
        }
    }
</script>

<style scoped>

</style>