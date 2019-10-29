<template>
  <app-layout>
   <app-table
            method="getBannedUsers"
           :pageSize="1"
           :cols="cols"></app-table>
  </app-layout>
</template>


<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/table/table-layout.vue";

    export default {
        name: "app-baned-users",
        data() {
          return {
              cols: [
                  {
                      id: 'counter',
                      label: '#',
                  },
                  {
                      id: 'nickName',
                      label: 'Nick name',
                  },
                  {
                      id: 'email',
                      label: 'E-mail',
                  },
                  {
                      id: 'bannedBy',
                      label: 'Banned by',
                  },
                  {
                      id: 'banStart',
                      label: 'From',
                  },
                  {
                      id: 'banEnd',
                      label: 'To',
                  },
                  {
                      id: 'reason',
                      label: 'Reason',
                  }
              ],
          }
        },
        components: {
            AppLayout,
            AppTable
        }
    }
</script>

<style scoped>

</style>