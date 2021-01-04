<template lang="">
    <div>
        <!-- news! -->
        <!-- <div v-for="(user,index) in this.$store.state.news" :key="index">
            {{user.title}}
            </div> -->
            <p v-for="(user,index) in this.$store.state.news" :key="index">
                <a v-bind:href="user.url">
                    {{user.title}} 
                    </a>
                    <small>{{user.time_ago}} by {{user.user}}</small>
                </p>
    </div>
</template>
<script>
// api를 index로 넣은 이유. import axios from 'axios'를 하면 계속 로딩이 되기 때문에 자원낭비

export default {
  created() {
      this.$store.dispatch('FETCH_NEWS');
    // var vm = this;
    // fetchNewsList()
    //   .then(function(response) {
    //     vm.users = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>
