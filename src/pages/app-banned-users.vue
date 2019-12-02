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
  name: "app-baned-users",
  data() {
    return {
      cols: [
        {
          id: "user_email",
          label: "User email"
        },
        {
          id: "moderator_email",
          label: "Banned by"
        },
        {
          id: "ban_start",
          label: "From"
        },
        {
          id: "ban_end",
          label: "To"
        },
        {
          id: "reason",
          label: "Reason"
        },
         {
          status: "unblock",
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
    UserService.getAllBanned()
      .then(banned => {
        this.rows = banned;
      })
      .catch(err => {
        throw new Error(err);
      });
  },
  filters: {
    sort(data, search) {
      return data.filter(el => {
        return (
          el.user_email.toLowerCase().includes(search) ||
          el.moderator_email.toLowerCase().includes(search) ||
          el.reason.toLowerCase().includes(search)
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