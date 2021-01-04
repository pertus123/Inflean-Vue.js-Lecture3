<template lang="">
    <!-- <div>
        <div v-for="(item, index) in fetchedAsk" :key="index">{{item.title}}</div>

    </div> -->




    <div>
    <p v-for="(item) in fetchedAsk" :key="item.title">
        <a v-bind:href="item.url">
            {{item.title}} 
        </a>
        <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
    </div>


</template>
<script>
import { mapGetters } from "vuex";
// import{fetchAskList} from '../api/index.js'
export default {
  computed: {
    //3.
    ...mapGetters(["fetchedAsk"])

    //2.
    // ...mapGetters([
    //     fetchedAsk : "fetchedAsk"
    // ])
    //1.
    // ...mapState({
    //     ask : state => state.ask
    // })
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
    // var vm = this;
    // fetchAskList()
    // .then(response=>vm.ask = response.data)
    // .catch(error => console.log(error));
  }
};
</script>
<style lang="">
</style>
