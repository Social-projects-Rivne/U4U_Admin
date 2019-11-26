<template>
    <main class="main">
        <div class="container">
            <table class="content-table">
                <thead>
                    <tr>
                     <th v-for="item in cols" :key="item.id">{{item.label}}</th>
                     <th>Reject</th>
                     <th>Approve</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in (filteredList)" :key="row.id">
                        <td v-for="col in cols" :key="col.id" >{{row[col.id]}}</td>
                        <td>
                            <form>
                                <input type="text" placeholder="Reject reason" class='reasonInput'  name="reason" @input="handleValue($event)" required />
                                <input type="submit" class="rejectBtn"  value="Reject" @click="onSubmith($event, row.id)" />
                            </form>
                        </td>
                        <td><input type="button" @click="onclick(row.id, $event)" value="Approve" /></td>
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
import UserService from '../../services/user.service';
import { async } from 'q';

export default {
    name: "table-layout",
    props: {
        cols:  Array,
        rows: Array,
        pageSize: { type: Number, default: 5 }
    },
    data: () => ({
        currentPage: 1,
        reason: ''
    }),
    methods: {
        nextPage: function() {
            if (this.currentPage * this.pageSize < this.rows.length)
                this.currentPage++;
        },
        prevPage: function() {
            if (this.currentPage > 1) this.currentPage--;
        },
        onclick: async function(id, event){
            await UserService.ApprovePlace(id);
            if(event.target.value === 'Approve'){
                event.target.value = 'Approved'
            }
        },
        onSubmith: async function(event, rowId){
            if(this.reason === ''){
                return;
            }
            event.preventDefault();
            event.target.value = 'Rejected';
            await  UserService.putRejectPlace(rowId, this.reason);
            this.reason = '';
            document.querySelector('.reasonInput').value = '';
        },
        handleValue: function(event){
            this.reason = event.target.value;
        }
    },
    computed: {
        filteredList() {
            return this.rows
                .filter((row, index) => {
                    let start = (this.currentPage - 1) * this.pageSize;
                    let end = this.currentPage * this.pageSize;
                    if (index >= start && index < end) return true;
                });
        }
    },
};
</script>

<style scoped>
@import "table-layout.scss";

</style>