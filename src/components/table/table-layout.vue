<template>
  <main class="main">
    <div class="container">
      <table class="content-table">
        <thead>
          <tr>
            <th v-for="item in cols" :key="item.id">{{item.label}}</th>
            <th v-if="checktheButton(cols) == true">
            Block 
            </th>
            <th v-else>Unblock</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in (filteredList)" :key="row.id">
            <td v-for="col in cols" :key="col.id">{{row[col.id]}}</td>
            <td>
            <button v-if="checktheButton(cols)" @click="blockUser(row)" class = 'button-block-user'>Block</button>
            <button v-else @click="userUnBlock(row.user_id)" class = 'button-unblock-user' >Unblock</button>
            </td>
          </tr>
          <tr v-if="showForm">
            <td colspan="7">
              <transition>
              <form class="input-reason-form"
              @submit.prevent="userBlock(reason)">
                 <h3 class="add-place-header">Please, write a reason why you want to block {{userName}} {{userSurname}}<br>
                  </h3>
                 <textarea
                 required
                 v-model="reason"
                 maxlength="40"
                 placeholder = 'Because of...'
                 class="add-blocking-reason-description">
                  </textarea>
                  <br>
                 <input class="add-reason-submit"
                       type='submit' value='Submit'  />
                  <input class="add-reason-submit"
                    type='button' value='Cancel'
                    @click="cancelBlocking(reason)"  />
              </form>
              </transition>
            </td>
          </tr>
          <tr v-if="submitted">
            <td  colspan="7">
            <div  id="form-icon">
            <p id="block-user">{{userName}} {{userSurname}} is blocked.
            {{userName}} {{userSurname}} will not be able to add comments and new places.
            </p>
            <img src="./check-solid.svg" alt="user is blocked" 
            id="user-blocked-img" 
            @click="submitted=false"
            >
            </div>
            </td>
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
import BlockUserService from '../../services/block-user.service';
import { EventBus } from '../../../event-bus';
export default {
  name: "table-layout",
  props: {
    cols: Array,
    rows: Array,
    pageSize: { type: Number, default: 5 }
  },
  data: () => ({
    currentPage: 1,
    showForm: false,
    reason:'',
    submitted: false,
    blockedUserInfo: null,
    userName:'',
    userSurname:''
  }),
  methods: {
    blockUser:function(blockedUserInfo){
      this.blockedUserInfo = blockedUserInfo;
      this.showForm = !this.showForm,
      this.submitted = false,
      this.userName = blockedUserInfo.name;
      this.userSurname = blockedUserInfo.surname
     
    },
    nextPage: function() {
      if (this.currentPage * this.pageSize < this.rows.length)
        this.currentPage++;
    },
    cancelBlocking:function(){
      this.showForm = false;
      this.reason = '';
   },
    userBlock: async function(reason){
      this.reason = '';
      this.showForm = false;
      this.submitted = true;
      const blockedUser = await BlockUserService.blockUser(reason, this.blockedUserInfo);
      if(blockedUser.id){
        EventBus.$emit("blockUser", blockedUser.id);
    }
    },
    userUnBlock: async function(id){
      const unblockedUser =  await BlockUserService.unblockUser(id);
      if(unblockedUser.id){
        EventBus.$emit("unblockUser", unblockedUser.id);
    }
    },
    prevPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    },
    checktheButton:function(arr) { 
      return arr.some((element) => element.status == "block") 
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