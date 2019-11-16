<template>
  <main class="main">
    <div class="container">
      <table class="content-table">
        <thead>
          <tr>
            <th v-for="item in cols" :key="item.id">{{item.label}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in (filteredList)" :key="row.id">
            <td v-for="col in cols" :key="col.id">{{row[col.id]}}</td>
          </tr>
          <tr v-if="!filteredList.length">
            <td class="content-table-error">We didn't find anything...</td>
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
export default {
  name: "table-layout",
  props: {
    cols: Array,
    rows: Array,
    pageSize: { type: Number, default: 5 }
  },
  data: () => ({
    currentPage: 1
  }),
  methods: {
    nextPage: function() {
      if (this.currentPage * this.pageSize < this.rows.length)
        this.currentPage++;
    },
    prevPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },
  computed: {
    filteredList() {
      return this.rows.filter((row, index) => {
        let start = (this.currentPage - 1) * this.pageSize;
        let end = this.currentPage * this.pageSize;
        if (index >= start && index < end) return true;
      });
    }
  }
};
</script>

<style scoped>
@import "table-layout.scss";
</style>