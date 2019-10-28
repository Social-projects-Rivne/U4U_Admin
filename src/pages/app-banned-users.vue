<template>
  <app-layout>
   <app-table :cols="cols" :rows="rows"></app-table>
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
                      id: 'bannedBy',
                      label: 'Banned by',
                  },
                  {
                      id: 'dateFrom',
                      label: 'From',
                  },
                  {
                      id: 'dateTo',
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
          createData(data) {
           //const { nickName, bunnedBy, to reason } = data;
              return [
                  {
                      id: 'customId',
                      counter: '1',
                      nickName: 'Jerry',
                      bannedBy: 'Tom Jenkins',
                      dateFrom: '2019-01-01',
                      dateTo: '2019-01-02',
                      reason: 'some reason'
                  }
              ]
          },
        },
        created() {
            this.rows = [
                {
                    id: 'customId',
                    counter: '1',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                },
                 {
                    id: 'customId1',
                    counter: '2',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                },
                 {
                    id: 'customId2',
                    counter: '3',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                }, {
                    id: 'customId3',
                    counter: '4',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                },
                 {
                    id: 'customId4',
                    counter: '5',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                },
                 {
                    id: 'customId5',
                    counter: '6',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                },
                 {
                    id: 'customId6',
                    counter: '7',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                },
                 {
                    id: 'customId7',
                    counter: '8',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                },
                 {
                    id: 'customId8',
                    counter: '1',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                }, {
                    id: 'customId9',
                    counter: '1',
                    nickName: 'Jerry2',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                }, {
                    id: 'customId10',
                    counter: '1',
                    nickName: 'Jerry',
                    bannedBy: 'Tom Jenkins',
                    dateFrom: '2019-01-01',
                    dateTo: '2019-01-02',
                    reason: 'some reason'
                }
            ]
        },
        components: {
            AppLayout,
            AppTable
        }
    }
</script>

<style scoped>

</style>