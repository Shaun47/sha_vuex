<template>
  <div id="app">
    <hello-world></hello-world>
    <ul>
      <li v-for="(item,index) in $store.state.list" :key="index">
          {{item.title}} <button @click="removeItem">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import { METHODS } from 'http'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    removeItem(){
      this.$store.dispatch("removeItem",this.item);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
