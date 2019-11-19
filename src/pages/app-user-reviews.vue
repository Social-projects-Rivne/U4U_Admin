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
  name: "user-reviews",
  data() {
    return {
      cols: [
        {
          id: "emailUser",
          label: "Created by"
        },
        {
          id: "comment",
          label: "Comment"
        },
        {
          id: "rating",
          label: "Rating"
        },
        {
          id: "placeName",
          label: "Place name"
        },
        {
          id: "createdAt",
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
    UserService.getAllReviews()
      .then(reviews => {
        this.rows = reviews;
      })
      .catch(err => {
        throw new Error(err);
      });
  },
  filters: {
    sort(data, search) {
      return data.filter(el => {
        return (
          el.comment.toLowerCase().includes(search) ||
          el.placeName.toLowerCase().includes(search) ||
          el.rating === (Number(search)) ||
          el.emailUser.toLowerCase().includes(search)
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