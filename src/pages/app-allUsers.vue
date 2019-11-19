<template>
  <app-layout>
    <app-table :cols="cols" :rows="rows | sort(search)"></app-table>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/dashboard/app-layout";
import AppTable from "@/components/table/table-layout.vue";
import UserService from "../services/user.service";
import { EventBus } from "../../event-bus.js";

export default {
  name: "app-users",
  data() {
    return {
      cols: [
        {
          id: "id",
          label: "Id"
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
        },
        {
          id: "created_at",
          label: "Created at"
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
    UserService.getAllUsers()
      .then(users => {
        this.rows = users;
      })
      .catch(err => {
        throw new Error(err);
      });
  },
  filters: {
    sort(data, search) {
      return data.filter(el => {
        return (
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
</style>