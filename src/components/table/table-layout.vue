<template>
    <main class="main">
        <p v-if="loading">Loading...</p>
        <p v-if="err">Something has gone terribly wrong</p>

        <div class="container">
            <table class="content-table">
                <thead>
                    <tr>
                     <th v-for="item in cols" :key="item.id">{{item.label}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows" :key="row.id">
                        <td v-for="col in cols" :key="col.id" >{{row[col.id]}}</td>
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

    import api from '../../services/api.service';

export default {
    name: "table-layout",
    props: {
        cols: Array,
        pageSize: { type: Number, default: 2 },
        method: String
    },

    data: () => ({
        loading: true,
        err: false,
        rows: [],
        offset: 0,
    }),

    methods: {
        nextPage() {
            this.offset += this.pageSize;
            this.fetchData()
        },

        prevPage() {
            if(this.offset > this.pageSize) {
                this.offset -= this.pageSize;
                this.fetchData();
            }
        },

        fetchData() {
            api[this.method](this.offset, this.pageSize)
                    .then(rows => {
                        this.err = '';
                        this.loading = '';
                        if(rows.length > 0) {
                            this.rows = rows
                        } else {
                            this.offset =- 1;
                        }
                    })
                    .catch(err => {
                        this.loading = '';
                        this.err = err;
                    })
        }
    },

    created()  {
      this.fetchData();
    },
};
</script>

<style scoped>
@import "table-layout.scss";

</style>