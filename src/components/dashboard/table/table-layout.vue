<template>
    <main class="main">
        <div class="container">
            <table class="content-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th scope="col" @click="sort('name')">
                            Name
                            <font-awesome-icon icon="sort-alpha-down" />
                        </th>
                        <th scope="col" @click="sort('email')">
                            Email
                            <font-awesome-icon icon="sort-alpha-down" />
                        </th>
                        <th>City</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in (sortedActivity, filteredList)" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.address.city}}</td>
                        <td>{{user.phone}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="button-container">
                <button @click="prevPage" class="button-left">
                    <font-awesome-icon icon="arrow-left" />Previous
                </button>
                <button @click="nextPage" class="button-right">
                    Next
                    <font-awesome-icon icon="arrow-right" />
                </button>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";
import { EventBus } from "../../../../event-bus.js";

export default {
    name: "table-layout",
    data: () => ({
        users: [],
        currentSort: "name",
        currentSortDir: "asc",
        search: "",
        searchSelection: "",
        pageSize: 5,
        currentPage: 1
    }),
    methods: {
        sort: function(s) {
            if (s === this.currentSort) {
                this.currentSortDir =
                    this.currentSortDir === "asc" ? "desc" : "asc";
            }
            this.currentSort = s;
        },
        nextPage: function() {
            if (this.currentPage * this.pageSize < this.users.length)
                this.currentPage++;
        },
        prevPage: function() {
            if (this.currentPage > 1) this.currentPage--;
        }
    },
    computed: {
        sortedActivity: function() {
            return this.users
                .sort((a, b) => {
                    let modifier = 1;
                    if (this.currentSortDir === "desc") modifier = -1;
                    if (a[this.currentSort] < b[this.currentSort])
                        return -1 * modifier;
                    if (a[this.currentSort] > b[this.currentSort])
                        return 1 * modifier;
                    return 0;
                })
                .filter((row, index) => {
                    let start = (this.currentPage - 1) * this.pageSize;
                    let end = this.currentPage * this.pageSize;
                    if (index >= start && index < end) return true;
                });
        },
        filteredList() {
            return this.users
                .filter(data => {
                    let email = data.email
                        .toLowerCase()
                        .match(this.search.toLowerCase());
                    let name = data.name
                        .toLowerCase()
                        .match(this.search.toLowerCase());
                    let city = data.address.city
                        .toLowerCase()
                        .match(this.search.toLowerCase());
                    let phone = data.phone
                        .toLowerCase()
                        .match(this.search.toLowerCase());
                    return email || name || city || phone;
                })
                .filter((row, index) => {
                    let start = (this.currentPage - 1) * this.pageSize;
                    let end = this.currentPage * this.pageSize;
                    if (index >= start && index < end) return true;
                });
        }
    },
    created() {
        EventBus.$on("inputData", data => {
            this.search = data;
        });

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.users = response.data;
            });
    }
};
</script>

<style scoped>
@import "table-layout.scss";
</style>