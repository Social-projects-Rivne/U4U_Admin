<template>
  <app-layout>
     <router-link to="/create-moderator">
      <button class="btn">Create Moderator</button>
     </router-link>
    <app-table :cols="cols" :rows="rows | sort(search)"></app-table>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/dashboard/app-layout";
import AppTable from "@/components/table/table-layout.vue";
import ModeratorService from "../services/moderators.service";
import { EventBus } from "../../event-bus.js";

export default {
  name: "app-moderators",
  data() {
    return {
      cols: [
        {
          id: "id",
          label: "Id"
        },
        {
          id: "nickname",
          label: "Nick name"
        },
        {
          id: "name",
          label: "Name"
        },
        {
          id: "surname",
          label: "Surname"
        },
        {
          id: "email",
          label: "Email"
        }
      ],
      rows: [],
      search: ""
    };
  },
  methods: {},
  created() {
    EventBus.$on("inputData", data => {
      this.search = data.toLowerCase();
    });
    ModeratorService.getAllModerators()
      .then(moderators => {
        const onlyModerators = moderators.filter(elem => {
          if (elem.is_admin === false) {
            return elem;
          }
        });
        this.rows = onlyModerators;
      })
      .catch(err => {
        throw new Error(err);
      });
  },
  filters: {
    sort(data, search) {
      return data.filter(el => {
        return (
          el.nickname.toLowerCase().includes(search) ||
          el.name.toLowerCase().includes(search) ||
          el.surname.toLowerCase().includes(search) ||
          el.email.toLowerCase().includes(search)
        );
      });
    }
  },
  components: {
    AppLayout,
    AppTable
  }
};
</script>

<style scoped>
   .btn {
  padding: .5rem;
  font-size: .8rem;
  font-weight: 700;
  font-size: .8rem;
  font-weight: 700;
  background: darkseagreen;
  color: #fff;
  border-radius: 5px;
  margin-left: 45%;
  margin-bottom: 1%;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  outline: none;
 }
</style>