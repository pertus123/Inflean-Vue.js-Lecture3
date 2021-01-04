<template lang="">
    <!-- <div>
        <div v-for="(item, index) in  this.$store.state.jobs" :key="index">{{item.title}}</div>
    </div> -->

<div>
    <p v-for="(item) in  this.$store.state.jobs" :key="item.title"> 
        <a :href="item.url">{{item.title}}</a>
        <small>{{item.time_ago}}, {{item.domain}} </small>
    </p>
</div>

</template>
<script>
// import {fetchJobsList} from "../api/index.js"
export default {
  data() {
    return {
      jobs: []
    };
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    // var vm = this;
    // fetchJobsList()
    // .then(response => vm.jobs = response.data)
    // .catch(error => console.log(error))
  }
};
</script>
<style lang="">
</style>
