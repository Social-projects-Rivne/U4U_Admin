<template>
  <app-layout>
   <app-table :cols="cols" :rows="rows"></app-table>
  </app-layout>
</template>



<script>
    import AppLayout from "@/components/dashboard/app-layout";
    import AppTable from "@/components/table/table-layout.vue";
    import ModeratorService from '../services/moderators.service';


    export default {
        name: "app-moderators",
        data() {
          return {
              cols: [
                  {
                      id: 'id',
                      label: 'Id',
                  },
                  {
                      id: 'nickname',
                      label: 'Nick name',
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
              ],
              rows: []
          }
        },
        methods: {
          
        },
        created() {
            ModeratorService.getAllModerators()
            .then((moderators) => {
                console.log(moderators);
                const onlyModerators = moderators.filter((elem) => {
                    if(elem.is_admin === false){
                        return elem;
                    }
                })
                this.rows = onlyModerators;
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