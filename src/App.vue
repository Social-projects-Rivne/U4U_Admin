<template>
  <div id="app">
      <router-view class="view"></router-view>
  </div>
</template>


<script>
export default {
    data: function(){
      return {
        accessToken: localStorage.getItem("accessToken")
      }
    },
    created: function()
    {
      if(!this.accessToken && this.$route.name !== 'login')
        this.$router
          .push("login")
          .catch(routerErr => {
            console.log("Handle router error:", routerErr)
          })

      if(this.accessToken && this.$route.name === 'login')
        this.$router
          .push("app")
          .catch(routerErr => {
            console.log("Handle router error:", routerErr)
          })
    }
}
</script>