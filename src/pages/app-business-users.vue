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
  name: "app-business-users",
  data() {
    return {
      cols: [
        {
          id: "id",
          label: "Id"
        },
        {
          id: "nickname",
          label: "Nickname"
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
    UserService.getAllBusiness()
      .then(business => {
        this.rows = business;
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
</style>